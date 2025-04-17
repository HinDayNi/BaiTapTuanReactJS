"use client"

import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../store/slices/themeSlice"

function ThemeToggle({ onToggle, currentTheme }) {
  const theme = useSelector((state) => state.theme.theme)
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleTheme())
    onToggle()
  }

  return (
    <div className="feature-container">
      <h2>🔁 Toggle Theme (Dark/Light mode)</h2>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <div
          style={{
            padding: "2rem",
            borderRadius: "0.5rem",
            backgroundColor: theme === "light" ? "#f9fafb" : "#1f2937",
            color: theme === "light" ? "#1f2937" : "#f9fafb",
            marginBottom: "1rem",
            transition: "all 0.3s",
          }}
        >
          <h3>Current Theme: {theme === "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}</h3>
          <p style={{ marginTop: "1rem" }}>This component uses Redux to manage the theme state.</p>
        </div>

        <button onClick={handleToggle} style={{ fontSize: "1.1rem" }}>
          {theme === "light" ? "Switch to Dark Mode 🌙" : "Switch to Light Mode ☀️"}
        </button>
      </div>
    </div>
  )
}

export default ThemeToggle
