import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetails";
import Header from "./components/Header";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryDetail />} />
        </Routes>
      </div>
    </>
  );
}
