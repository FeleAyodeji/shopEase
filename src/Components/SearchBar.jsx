function SearchBar({ setSearchQuery }) {
  return (
    <input
      type="text"
      className="w-full p-2 mb-4 border rounded"
      placeholder="Search products..."
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchBar;
