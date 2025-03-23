import { Outlet } from "react-router-dom";
import Navbar from "./navbar/index.jsx";
import GlobalState, { GlobalContext } from "./context";
import RecipeSummaryModal from "./recipe-summary-modal.jsx";
import { useContext } from "react";

// Main component that wraps the entire app with GlobalState (context provider)
// This ensures that all components inside it can access the global state
function RecipeApp() {
  return (
    <GlobalState> 
      {/* GlobalState provides the context to the app */}
      <RecipeAppContent /> 
    </GlobalState>
  );
}

// Separate component to consume context and render UI
function RecipeAppContent() {
  // Access global state using useContext
  const { recipeSummaryModal } = useContext(GlobalContext);

  return (
    <div className="flex flex-col w-full bg-gray-100 min-h-screen">
      {/*min-h-screen sm:min-h-screen bg-[url('/images/food-bg.webp')] bg-cover bg-center bg-no-repeat*/}
      
      {/* Conditionally render the RecipeSummaryModal if it is open */}
      {recipeSummaryModal?.recipeFinderApp?.isOpen && <RecipeSummaryModal />}
      
      {/* Navbar component (contains navigation links) */}
      <Navbar />

      {/* Outlet renders the current route's component */}
      <Outlet />
    </div>
  );
}

export default RecipeApp;
