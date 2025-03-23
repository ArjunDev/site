import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../context';

const Navbar = () => {

  const {
    searchParam, 
    setSearchParam, 
    handleFromSubmit} = useContext(GlobalContext);

  //console.log(searchParam)
  
  return (
      <div className='flex justify-center items-center bg-gray-800 py-4 mb-4 sm:w-full'>
        <form 
          className='flex justify-center items-center sm:gap-x-10'
          onSubmit={handleFromSubmit}>
          <div>
            <NavLink 
              className='text-orange-500 hover:text-orange-700 hover:underline mr-2 font-bold'
              to={"/project/recipeapp/home"} 
            >RecipeApp</NavLink>
          </div>
          <div className='flex w-full max-w-3xs'>
          <input 
            className='bg-gray-100 rounded-lg p-1.5 mr-3 shadow-md shadow-orange-400/50 focus:border-b-2 border-b-2 border-transparent focus:border-orange-500 w-full max-w-[200px] focus:outline-none sm:min-w-3xs'
            type="text"
            placeholder='Search a recipe...'
            name='search'
            autoComplete='off'
            value={searchParam}
            onChange={(event)=> setSearchParam(event.target.value)}
          />
          </div>
          <ul className='flex gap-3 text-orange-500 font-bold sm:gap-6'>
            <li>
              <NavLink 
                className={({isActive})=> isActive ? 'underline' : 'hover:text-orange-700 hover:underline'}
                to={"/project/recipeapp/home"} >Home</NavLink>
            </li>
            <li>
              <NavLink 
                to={"/project/recipeapp/favorites"}
                className={({isActive})=> isActive ? 'underline' : 'hover:text-orange-700 hover:underline'}
              >Favorites</NavLink>
            </li>
          </ul>
        </form>
      </div>
  )
}

export default Navbar;