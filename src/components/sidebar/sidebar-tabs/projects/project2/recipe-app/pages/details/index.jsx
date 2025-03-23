import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context';

const Details = () => {

  const {id} = useParams();
  const {recipeDetailsData, setRecipeDetailsData, handleMarkFavorite,favoriteList} = useContext(GlobalContext);

  useEffect(()=>{
    getRecipeDetails();
    async function getRecipeDetails(){
      const res = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);

      const recipeData = await res.json();

      if(recipeData){
        setRecipeDetailsData(recipeData);
      }
      //console.log(recipeData);
    }
  },[])

  //console.log(recipeDetailsData);
  return (
    <div className='flex justify-center items-center'>
    <div className='flex justify-center items-center flex-col gap-2 rounded-md w-90 bg-slate-100 drop-shadow-lg overflow-hidden px-4 py-4'>
      <img 
        className='object-cover rounded-md h-40 w-80 bg-slate-100 drop-shadow-lg'
        src={recipeDetailsData?.recipe?.image_url} 
        alt="recipe image"
      />
      <div className='flex justify-center text-lg font-bold'>
        <h2>{recipeDetailsData?.recipe?.title}</h2>
      </div>
      <div>
        <button 
          onClick={()=>handleMarkFavorite(recipeDetailsData?.recipe)}
          className='bg-orange-400 text-black font-bold px-3 py-1 rounded  hover:bg-gray-800 hover:text-orange-400'>
          {favoriteList && favoriteList.length > 0 && favoriteList.findIndex(item=> item.recipe_id === recipeDetailsData?.recipe.recipe_id) !== -1 ? "Remove from favorites" : "Add to favorites"}
        {/*dynamically naming a button based on condition*/}
        </button>
      </div>
      <ul >
        <h3 className='text-base font-bold'>Ingredients: </h3>
        {recipeDetailsData?.recipe?.ingredients.length > 0 ? 
        recipeDetailsData.recipe.ingredients.map((item, index)=> 
        <li 
        className='mb-1 text-sm' 
        key={index}>{item}</li>) : null}
      </ul>
    </div>
    </div>
  )
}

export default Details
