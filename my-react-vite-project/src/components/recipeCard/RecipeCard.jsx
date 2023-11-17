// rafce
import { ApiContext } from '../../context/ApiContext.jsx'
import './recipeCard.css'
import { useContext, useState } from 'react'

const RecipeCard = ({title,description,image, id}) => {

  const [isDeletedLoading, setIsDeletedLoading] = useState(false)
  const {deleteRecipe} = useContext(ApiContext)
  return (
    <div className='recipe-card'>
        <img className='recipe-image' src={image} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
        <button className='btn-delete' onClick={async () => {
          setIsDeletedLoading(true)
          await deleteRecipe(id)
          setIsDeletedLoading(false)

        }} >
          {isDeletedLoading ? "Loading..." : "Sil"}
        </button>
    </div>

  )
}

export default RecipeCard
