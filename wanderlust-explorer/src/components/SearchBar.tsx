interface SearchBarProps {
  search: string
  setSearch: (value: string) => void
}

export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search experiences..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border rounded-lg p-3 mb-6"
    />
  )
}