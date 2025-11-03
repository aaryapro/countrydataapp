import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import CountrySkeleton from "../components/CountrySkeleton";
import SearchFilter from "../components/SearchFilter";
import data from "../data/countries.json";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCountries(data);
      setLoading(false);
    }, 800);
  }, []);

  const filtered = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) &&
      (region === "" || c.region === region)
  );

  return (
    <>
      <SearchFilter search={search} setSearch={setSearch} region={region} setRegion={setRegion} />

      <div className="flex flex-wrap gap-6 justify-center p-4 max-w-6xl mx-auto">
        {loading
          ? [...Array(8)].map((_, i) => <CountrySkeleton key={i} />)
          : filtered.map((c) => <CountryCard key={c.name} country={c} />)}
      </div>
    </>
  );
}
