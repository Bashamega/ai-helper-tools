import { useState, useEffect } from "react";

export function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // On component mount, check if the user has a preferred theme stored in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      // Apply dark mode if it's the preferred theme
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    // Toggle between dark and light mode
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode); // Update state
  };

  // Tailwind classes for the toggle switch
  const labelBaseClasses =
    "block relative w-[50px] h-[20px] rounded-[10px] cursor-pointer transition-all duration-300";
  const lightModeBackground = "bg-[#ebebeb]";
  const darkModeBackground = "bg-[#242424]";
  const labelShadow =
    "shadow-[inset_0px_5px_15px_rgba(0,0,0,0.4),_inset_0px_-5px_15px_rgba(255,255,255,0.4)]";

  // Tailwind classes for the toggle button (inner circle)
  const buttonBaseClasses =
    "absolute top-0 w-[20px] h-[20px] rounded-[18px] transition-all duration-300 shadow-[0px_5px_10px_rgba(0,0,0,0.2)]";
  const lightModeButtonBackground =
    "bg-gradient-to-b from-[#ffcc89] to-[#d8860b]";
  const darkModeButtonBackground = "bg-gradient-to-b from-[#777] to-[#3a3a3a]";
  const darkModePosition = "left-[30px]";
  const lightModePosition = "left-0";

  return (
    <div id="dark-mode-toggle">
      {/* Hidden checkbox input element to control the toggle state */}
      <input
        type="checkbox"
        id="darkmode-toggle-checkbox"
        className="w-0 h-0 hidden" // Hide the checkbox, purely for accessibility
        onChange={toggleDarkMode}
        checked={isDarkMode} // Bind the checkbox state to dark mode
      />

      {/* The visual representation of the toggle */}
      <label
        htmlFor="darkmode-toggle-checkbox"
        className={`${labelBaseClasses} ${isDarkMode ? darkModeBackground : lightModeBackground} ${labelShadow}`}
      >
        {/* The inner button (circle) that moves based on the dark mode state */}
        <span
          className={`${buttonBaseClasses} ${isDarkMode ? darkModePosition : lightModePosition} ${isDarkMode ? darkModeButtonBackground : lightModeButtonBackground}`}
        ></span>
      </label>
    </div>
  );
}
