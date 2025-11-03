import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <h2 className="font-extrabold text-lg">
          <a href="/" className="text-gray-900 dark:text-white">
            Where in the world?
          </a>
        </h2>

        <button
          onClick={toggleTheme}
          className="relative flex items-center w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full transition-all p-1 group"
        >
          {/* toggle thumb */}
          <span
            className={`absolute h-5 w-5 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-all duration-300 ${
              theme === "dark" ? "translate-x-7" : ""
            }`}
          ></span>

          {/* Sun ☀️ */}
          <span className={`text-yellow-500 text-sm duration-300 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}>
            ☀️
          </span>

          {/* Moon 🌙 */}
          <span className={`text-gray-300 text-sm ml-auto duration-300 ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}>
            🌙
          </span>
        </button>
      </div>
    </header>
  );
}
