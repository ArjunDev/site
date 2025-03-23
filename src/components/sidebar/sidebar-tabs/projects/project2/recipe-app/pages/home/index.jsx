import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context';
import RecipeItem from '../../recipe-item';

const RecipeHome = () => {
  const { loading, recipeList, errorMsg } = useContext(GlobalContext);

  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;

  if (loading) {
    return <div className="text-center text-xl my-20 font-bold">Loading...</div>;
  }

  if (errorMsg) {
    return <div className="text-center text-xl my-20 font-bold">{errorMsg}</div>;
  }

  // Pagination Logic
  const totalPages = Math.ceil(recipeList.length / recipesPerPage);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipeList.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center container gap-6 z-0 relative">
        {currentRecipes && currentRecipes.length > 0 ? 
          currentRecipes.map((item) => <RecipeItem key={item.recipe_id} item={item} />)
          : 
          <div className="flex justify-center items-center z-0">
            <p className="text-center text-xl my-20 font-bold text-wrap">
              Nothing to show! Please search a recipe
            </p>
          </div>
        }
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center my-6 gap-2 mb-20">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-orange-200 rounded hover:bg-gray-50 disabled:bg-gray-200 cursor-pointer disabled:cursor-not-allowed"
          >Previous</button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded cursor-pointer ${currentPage === index + 1 ? 'bg-orange-500 text-black font-medium' : 'bg-orange-200 hover:bg-gray-50'}`}
            >{index + 1}</button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-orange-200 rounded hover:bg-gray-50 disabled:bg-gray-200 cursor-pointer disabled:cursor-not-allowed"
          >Next</button>
        </div>
      )}
    </>
  );
};

export default RecipeHome;
