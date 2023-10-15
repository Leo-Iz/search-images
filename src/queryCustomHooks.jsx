import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"
import customFetch from "./utils"
import { useGlobalContext } from "./context"
const key = import.meta.env.VITE_API_KEY

export const useSearchPhotos = () => {
  const { searchTerm } = useGlobalContext()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["photos", searchTerm],
    queryFn: async () => {
      let { data } = await customFetch.get(
        `/search/photos?client_id=${key}&query=${searchTerm}`
      )
      data = data.results
      //   console.log(data)
      return data
    },
  })
  return { isError, isLoading, data, error }
}

// export const useSearchPhotos = () => {

//   const queryClient = useQueryClient()
//   const { mutate: searchPhotos, isLoading } = useMutation({
//     mutationFn: async () => {
//       const { data } = await customFetch.get(
//         `/search/photos?client_id=${key}&query=${searchTerm}`
//       )
//       console.log("queryhook", searchTerm)
//       const result = data.results
//       return result
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["photos"] })
//     },
//     onError: (error) => {
//       console.log(error)
//     },
//   })
//   return { searchPhotos, isError, isLoading, data, error }
// }
