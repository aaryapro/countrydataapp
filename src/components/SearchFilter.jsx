export default function SearchFilter({ search, setSearch, region, setRegion }) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 max-w-6xl mx-auto p-4">
      <input
        type="text"
        className="w-full md:w-80 bg-white dark:bg-gray-800 shadow rounded px-4 py-2"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="w-40 bg-white dark:bg-gray-800 shadow rounded px-4 py-2"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="">All Regions</option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
}
