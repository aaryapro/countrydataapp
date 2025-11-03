import { useParams, Link } from "react-router-dom";
import data from "../data/countries.json";

export default function CountryDetail() {
  const { name } = useParams();

  // find selected country by name (case-insensitive)
  const c = data.find(
    (x) => x.name.toLowerCase() === name.toLowerCase()
  );

  if (!c) return <h2 className="text-center mt-10 text-xl">Country not found ❌</h2>;

  // ✅ Languages fix (array -> names)
  const languages = c.languages && c.languages.length
    ? c.languages.map((l) => l.name).join(", ")
    : "N/A";

  // ✅ Currencies fix
  const currencies = c.currencies && c.currencies.length
    ? c.currencies.map((cur) => cur.name).join(", ")
    : "N/A";

  // ✅ Top Level Domain fix
  const tld = c.topLevelDomain && c.topLevelDomain.length
    ? c.topLevelDomain.join(", ")
    : "N/A";

  return (
    <div className="max-w-6xl mx-auto p-6">
      
      {/* Back Button */}
      <Link
        to="/"
        className="px-4 py-2 bg-white dark:bg-gray-800 shadow rounded inline-block mb-6 hover:scale-105 transition"
      >
        ⬅ Back
      </Link>

      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Flag */}
        <img src={c.flags.svg} alt={c.name} className="w-80 rounded shadow" />

        <div>
          <h1 className="font-extrabold text-3xl mb-4">{c.name}</h1>

          <p><b>Native Name:</b> {c.nativeName || c.name}</p>
          <p><b>Population:</b> {c.population.toLocaleString()}</p>
          <p><b>Region:</b> {c.region}</p>
          <p><b>Sub Region:</b> {c.subregion || "N/A"}</p>
          <p><b>Capital:</b> {c.capital || "N/A"}</p>
          <p><b>Top Level Domain:</b> {tld}</p>
          <p><b>Currencies:</b> {currencies}</p>
          <p><b>Languages:</b> {languages}</p>

          {/* Border Countries */}
          <div className="mt-6">
            <b>Border Countries:</b>

            <div className="flex flex-wrap gap-2 mt-2">
              {c.borders && c.borders.length ? (
                c.borders.map((code) => {
                  // ✅ Use alpha3Code to find neighbors
                  const neighbor = data.find(
                    (x) => x.alpha3Code === code
                  );

                  if (!neighbor) return null;

                  return (
                    <Link
                      key={code}
                      to={`/country/${neighbor.name}`}
                      className="px-3 py-1 bg-white dark:bg-gray-800 rounded shadow text-sm hover:scale-105 transition inline-block"
                    >
                      {neighbor.name}
                    </Link>
                  );
                })
              ) : (
                <span className="text-gray-500 dark:text-gray-400">None</span>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
