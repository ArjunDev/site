import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import FavRecipeItem from './fav-recipe-item';

const Favorites = () => {

  const {favoriteList} = useContext(GlobalContext);
  //console.log(favoriteList)
  return (
    <div key={favoriteList?.map((el)=> el.recipe_id)} className='flex flex-wrap justify-center container w-auto gap-6'>
      {favoriteList && favoriteList.length > 0 ? 
        favoriteList.map((item)=> <FavRecipeItem recipe_id={item.recipe_id} item={item}/> )

      : <div>
          <p className='text-center text-xl my-20 font-bold'>Nothing is added to favorites!</p>
        </div>
      }
    </div>
  )
}

export default Favorites