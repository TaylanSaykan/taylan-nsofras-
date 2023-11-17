import { useContext } from "react";
import RecipeCard from "../recipeCard/RecipeCard";
import "./recipeList.css";
import { ApiContext } from "../../context/ApiContext.jsx";


const RecipeList = () => {

  const {recipes, isLoading, deleteRecipe} = useContext(ApiContext)

  return (
    <div className="recipe-list">
      {isLoading.read && <p>Loading...</p>}
      {recipes.map((recipe) => (
        <RecipeCard {...recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default RecipeList;
