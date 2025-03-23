import React, { useContext } from 'react';
import { GlobalContext } from './context';

const RecipeSummaryModal = () => {

  const { recipeSummaryModal, setRecipeSummaryModal} = useContext(GlobalContext); 
  // global context state

  const handleCloseBtn = () =>{
    setRecipeSummaryModal(prevState => ({
      ...prevState, recipeFinderApp: {isOpen: false}})
    )
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
  {/* Backdrop with blur effect */}
  <div className="absolute inset-0 bg-black/50 pointer-events-auto"></div>

  {/* Modal Content */}
  <div className="relative m-5 sm:min-w-[200px] bg-cyan-50 p-4 rounded-lg shadow-xl z-50">
    <p className="font-bold mb-2 text-lg">Summary:</p>
    
    {/* List of summary */}
    <ul className="mb-6 text-sm list-disc list-inside">
      {recipeSummaryModal?.recipeFinderApp?.summary.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ul>

    {/* Close button */}
    <button
      id="close-btn"
      className="absolute top-2 right-2 text-xl rounded bg-red-500 px-2 hover:bg-red-400 transition hover:cursor-pointer"
      onClick={handleCloseBtn}
    >
      X
    </button>
  </div>
</div>

  );
};

export default RecipeSummaryModal;
