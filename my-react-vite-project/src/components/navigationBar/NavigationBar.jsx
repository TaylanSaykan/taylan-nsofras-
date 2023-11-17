import { useContext, useState } from 'react';
import './navigationBar.css';
import { UserPreferencesContext } from '../../context/UserPreferencesContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.jsx';


const ThemeSlider = () => {
const {theme, toggleTheme} = useContext(UserPreferencesContext)
const [isToggled, setIsToggled] = useState(theme === 'dark')

const handleToggle = () => {
  setIsToggled(!isToggled)
  toggleTheme()
}

  return (
    <div className={`slider-container ${isToggled ? 'dark' : 'light'}`} onClick={handleToggle}>
      <div className='slider-button'></div>
    </div>
  )
}

const NavigationBar = () => {

  const {isAuthenticated, logout} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }

  const handleLogout = () => {
    logout();
    navigate('/login')
  }


  return (
    <nav className="navigation-bar">
      <div className="logo">Recipe Platform</div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/new-recipe">Add Recipe</Link>
        <Link to="/settings">Settings</Link>
        <button onClick={isAuthenticated ? handleLogout : handleLogin}>{isAuthenticated ? "Logout" : "Login"} </button>
        <ThemeSlider/>
      </div>
    </nav>
  );
};

export default NavigationBar;
