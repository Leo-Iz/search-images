import { createContext, useContext, useState, useEffect } from "react"

const AppContext = createContext()
const getInitialMode = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme:dark)").matches
  const storedDarkTheme = localStorage.getItem("darkTheme") === "true"
  return storedDarkTheme || prefersDark
}

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialMode())
  const [searchTerm, setSearchTerm] = useState("cat")
  const toggleDarkTheme = () => {
    const newTheme = !isDarkTheme
    setIsDarkTheme(newTheme)
    localStorage.setItem("darkTheme", newTheme)
  }
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme)
  }, [isDarkTheme])
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
