import React, { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context';

const FavRecipeDetails = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const { handleMarkFavorite, favoriteList} = useContext(GlobalContext);

  const favRecipe = favoriteList?.filter(item=> item.recipe_id === id);

  useEffect(() => {
    if (!favRecipe?.length) {
      navigate("/project/recipeapp/favorites");
    }
  }, [favRecipe]);

  
  return (
  <div className='flex justify-center items-center'>
  {favRecipe?.length > 0 ? (
    <div className='flex justify-center items-center flex-col gap-2 rounded-md w-90 bg-slate-100 drop-shadow-lg overflow-hidden px-4 py-4'>
      <img 
        className='object-cover rounded-md h-40 w-80 bg-slate-100 drop-shadow-lg'
        src={favRecipe?.[0]?.image_url} 
        alt="recipe image"
      />
      <div className='flex justify-center text-lg font-bold'>
        <h2>{favRecipe?.[0]?.title}</h2>
      </div>
      <div>
        <button 
          onClick={() => handleMarkFavorite(favRecipe?.[0])}
          className='bg-orange-400 text-black font-bold px-3 py-1 rounded hover:bg-gray-800 hover:text-orange-400'>
          {favoriteList?.some(item => item.recipe_id === id) 
            ? "Remove from favorites" 
            : "Add to favorites"}
        </button>
      </div>
      <ul>
        <h3 className='text-base font-bold mb-3'>Ingredients:</h3>
      {favRecipe?.[0]?.ingredients?.length > 0 ? (
        favRecipe[0].ingredients.map((item, index) => (
          <li className='mb-1 text-sm ml-4' key={index}>{item}</li>
        ))
      ) : (
        <p>No ingredients listed.</p>
      )}
      </ul>
    </div>) : null 
    }
  </div>
  )
}

export default FavRecipeDetails
