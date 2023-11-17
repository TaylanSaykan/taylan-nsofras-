import { useContext, useEffect, useState } from "react"
import { UserPreferencesContext } from "../../context/UserPreferencesContext.jsx"
import './settings.css'
import axios from "axios"

const Settings = () => {

  const {language, changeLanguage, theme, toggleTheme} =  useContext(UserPreferencesContext)

  const [user, setUser] = useState({})

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).access_token}`,
          },
        }
      ).then(response => setUser(response.data) )
      console.log(response);
    }

    getUserProfile()

  }, [])

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <div className="settings-option">
        <label>Language</label>
        <select value={language} onChange={e => changeLanguage(e.target.value)}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
      <div className="settings-option">
          <label>Theme:</label>
          <button onClick={toggleTheme}>{theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}</button>
      </div>
      <div className="user-card">
        <img src={user.avatar} alt={user.name} />
        <p>{user.name}</p>
        <p>{user.role}</p>
        <p>{user.email}</p>
      </div>
    </div>
  )
}

export default Settings
