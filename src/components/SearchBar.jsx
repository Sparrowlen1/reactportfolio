const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder=" Search for sparrowlen projects..."
      className="w-full p-3 border rounded-lg"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default SearchBar