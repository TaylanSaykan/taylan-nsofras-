import { useContext } from "react";
import NavigationBar from "./components/navigationBar/NavigationBar.jsx";
import Home from "./components/home/Home.jsx";
import NewRecipeForm from "./components/newRecipeForm/NewRecipeForm.jsx";
import Settings from "./components/settings/Settings.jsx";
import { ApiContextProvider } from "./context/ApiContext";
import { UserPreferencesContext } from "./context/UserPreferencesContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./services/PrivateRoute";
import Login from './components/login/Login.jsx';

function App() {

  const {theme} = useContext(UserPreferencesContext);

  return (

    <Router>
      <div className={theme}>
        <NavigationBar />
        <ApiContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new-recipe" element={<PrivateRoute element={<NewRecipeForm />} />} />
            <Route path="/settings" element={<PrivateRoute element={<Settings />} />} />
          </Routes>
        </ApiContextProvider>
      </div>
    </Router>

  );
}

export default App;
