import React from 'react'
import { NavLink } from 'react-router-dom'

function RecipeItem({item}) {
  //console.log(item.recipe_id)

  return (
    <div className='flex flex-col gap-2 rounded-md w-80 bg-slate-100 drop-shadow-lg overflow-hidden px-4 py-4'>
      <img 
        className='object-cover rounded-md h-40'
        src={item.image_url} 
        alt="recipe image" 
      />
      <div className='flex justify-center'>
        <h3 className='font-bold'>{item.title}</h3>
      </div>
      <div className='flex justify-center'>
      <NavLink className='bg-orange-400 text-black font-bold px-3 py-1 rounded  hover:bg-gray-800 hover:text-orange-400'
        to={`recipe-item/${item?.recipe_id}`}>See Recipe Details</NavLink>
      </div>
    </div>
  )
}

export default RecipeItem