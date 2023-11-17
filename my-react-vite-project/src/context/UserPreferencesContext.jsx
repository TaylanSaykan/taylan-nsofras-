import { createContext, useState } from 'react'

export const UserPreferencesContext = createContext()

export const UserPreferencesProvider = ({children}) => {

const [language, setLanguage] = useState("English")
const [theme, setTheme] = useState("light")

const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

const changeLanguage = (newLanguage) => setLanguage(newLanguage)


  return (
    <UserPreferencesContext.Provider value={{theme, language, changeLanguage, toggleTheme}} >
      {children}
    </UserPreferencesContext.Provider>
  )
}
