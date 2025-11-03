import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
  return (
    <Link
      to={`/country/${country.name}`}
      className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden w-64 hover:scale-105 transition"
    >
      <img className="h-40 w-full object-cover" src={country.flag} alt={country.name} />
      <div className="p-4">
        <h3 className="font-bold mb-2 text-lg">{country.name}</h3>
        <p><b>Population:</b> {country.population.toLocaleString()}</p>
        <p><b>Region:</b> {country.region}</p>
        <p><b>Capital:</b> {country.capital}</p>
      </div>
    </Link>
  );
}
