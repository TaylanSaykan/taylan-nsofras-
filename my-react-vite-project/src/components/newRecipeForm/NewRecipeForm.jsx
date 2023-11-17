import { useContext, useState } from 'react'
import './newRecipeForm.css'
import { ApiContext } from '../../context/ApiContext.jsx'

const NewRecipeForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const [titleErr, setTitleErr] = useState(false)
    const [descriptionErr, setDescriptionErr] = useState(false)
    const [imageErr, setImageErr] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleErr(false)
        setDescriptionErr(false)
        setImageErr(false)

        if(title.trim() && description.trim() && image.trim()){
          addNewRecipe({title,description,image})
          setTitle("")
          setDescription("")
          setImage("")
        } else {
          !title.trim() && setTitleErr(true)
          !description.trim() && setDescriptionErr(true)
          !image.trim() && setImageErr(true)
        }



    };

    const {addNewRecipe , isLoading} = useContext(ApiContext)
  return (
    <form className='new-recipe-form' onSubmit={handleSubmit}>
        <div className="form-control">
          <input type="text" placeholder='Recipe Title' value={title} onChange={(e) => setTitle(e.target.value)}  />
          {titleErr && <p className='input-error'>Recipe Title can not be empty!</p>}
        </div>

        <div className="form-control">
          <textarea placeholder='Recipe Description' value={description} onChange={(e) => setDescription(e.target.value)}  />
          {descriptionErr && <p className='input-error'>Recipe Description can not be empty!</p>}
        </div>
        <div className="form-control">
          <input type="text" placeholder='Recipe Image URL' value={image} onChange={(e) => setImage(e.target.value)}  />
          {imageErr && <p className='input-error'>Image URL can not be empty!</p>}
        </div>
        <button type='submit'>{isLoading.add ? "Loading..." : "Add Recipe"} </button>
    </form>
  )
}

export default NewRecipeForm
