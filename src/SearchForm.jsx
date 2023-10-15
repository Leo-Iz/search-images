import { useGlobalContext } from "./context"
import { useSearchPhotos } from "./queryCustomHooks"

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const { searchPhotos } = useSearchPhotos()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value

    if (searchValue.length > 0) {
      setSearchTerm(searchValue)
      return
    }
  }
  return (
    <section>
      <h1>Unsplash Images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </section>
  )
}
export default SearchForm
