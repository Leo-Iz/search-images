import { useSearchPhotos } from "./queryCustomHooks"
const Gallery = () => {
  const { isError, isLoading, data, error } = useSearchPhotos()
  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )
  }
  if (isError) {
    return (
      <section className="image-container">
        <h3>There was an error! </h3>
        <h4>{error}</h4>
      </section>
    )
  }
  if (data.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    )
  }

  return (
    <section className="image-container">
      {data.map(({ alt_description, urls, id }) => {
        return (
          <img
            src={urls.regular}
            alt={alt_description}
            key={id}
            className="img"
          />
        )
      })}
    </section>
  )
}

export default Gallery
