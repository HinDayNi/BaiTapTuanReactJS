"use client"

import { useState } from "react"
import { Provider } from "react-redux"
import { store } from "./store"
import Counter from "./features/Counter"
import TodoList from "./features/TodoList"
import ThemeToggle from "./features/ThemeToggle"
import ShoppingCart from "./features/ShoppingCart"
import Auth from "./features/Auth"
import AsyncData from "./features/AsyncData"
import AdvancedCounter from "./features/AdvancedCounter"
import Calculator from "./features/Calculator"
import EventManagement from "./features/EventManagement"
import CombinedFeatures from "./features/CombinedFeatures"
import "./App.css"

function App() {
  const [activeFeature, setActiveFeature] = useState("counter")
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const renderFeature = () => {
    switch (activeFeature) {
      case "counter":
        return <Counter />
      case "todo":
        return <TodoList />
      case "theme":
        return <ThemeToggle onToggle={toggleTheme} currentTheme={theme} />
      case "cart":
        return <ShoppingCart />
      case "auth":
        return <Auth />
      case "async":
        return <AsyncData />
      case "advancedCounter":
        return <AdvancedCounter />
      case "calculator":
        return <Calculator />
      case "events":
        return <EventManagement />
      case "combined":
        return <CombinedFeatures />
      default:
        return <Counter />
    }
  }

  return (
    <Provider store={store}>
      <div className={`app ${theme}`}>
        <header>
          <h1>Redux Toolkit Features</h1>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </header>

        <div className="container">
          <nav className="sidebar">
            <ul>
              <li className={activeFeature === "counter" ? "active" : ""} onClick={() => setActiveFeature("counter")}>
                🧩 Counter App
              </li>
              <li className={activeFeature === "todo" ? "active" : ""} onClick={() => setActiveFeature("todo")}>
                📋 To-do List
              </li>
              <li className={activeFeature === "theme" ? "active" : ""} onClick={() => setActiveFeature("theme")}>
                🔁 Toggle Theme
              </li>
              <li className={activeFeature === "cart" ? "active" : ""} onClick={() => setActiveFeature("cart")}>
                📦 Shopping Cart
              </li>
              <li className={activeFeature === "auth" ? "active" : ""} onClick={() => setActiveFeature("auth")}>
                🎯 Auth
              </li>
              <li className={activeFeature === "async" ? "active" : ""} onClick={() => setActiveFeature("async")}>
                🔄 Async Data
              </li>
              <li
                className={activeFeature === "advancedCounter" ? "active" : ""}
                onClick={() => setActiveFeature("advancedCounter")}
              >
                🔄 Advanced Counter
              </li>
              <li
                className={activeFeature === "calculator" ? "active" : ""}
                onClick={() => setActiveFeature("calculator")}
              >
                🧮 Calculator
              </li>
              <li className={activeFeature === "events" ? "active" : ""} onClick={() => setActiveFeature("events")}>
                📅 Event Management
              </li>
              <li className={activeFeature === "combined" ? "active" : ""} onClick={() => setActiveFeature("combined")}>
                🔐 Combined Features
              </li>
            </ul>
          </nav>

          <main className="content">{renderFeature()}</main>
        </div>
      </div>
    </Provider>
  )
}

export default App
