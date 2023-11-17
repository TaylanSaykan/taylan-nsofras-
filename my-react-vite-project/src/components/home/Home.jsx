import './home.css';
import RecipeList from '../recipeList/RecipeList.jsx';

const Home = () => {
  return (
    <div className='home'>
      <div className="home-title">
        <h1>Welcome to the Recipe Sharing Platform</h1>
        <p>Find and share the best recipes from around the world!</p>
      </div>
        <RecipeList/>
    </div>
  );
};

export default Home;
