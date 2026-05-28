interface FilterBarProps {
  category: string
  setCategory: (value: string) => void
  destination: string
  setDestination: (value: string) => void
}

export default function FilterBar({
  category,
  setCategory,
  destination,
  setDestination,
}: FilterBarProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-lg p-3"
      >
        <option value="">All categories</option>
        <option value="Adventure">Adventure</option>
        <option value="Culture">Culture</option>
        <option value="Food">Food</option>
        <option value="Wellness">Wellness</option>
        <option value="Nature">Nature</option>
      </select>

      <select
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="border rounded-lg p-3"
      >
        <option value="">All destinations</option>
        <option value="Nairobi, Kenya">Nairobi, Kenya</option>
        <option value="Tokyo, Japan">Tokyo, Japan</option>
        <option value="Bali, Indonesia">Bali, Indonesia</option>
      </select>
    </div>
  )
}