import { createContext, useState } from "react";

export const GlobalContext = createContext(null);
export default function GlobalState({children}){

  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading]= useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("")
  const [recipeSummaryModal, setRecipeSummaryModal] = useState({
    recipeFinderApp: {
      name: "Recipe Finder App",
      summary: [
        "Developed a Recipe Finder App using React.js and Tailwind CSS.",
        "Integrated a third-party API to fetch and display recipes dynamically.",
        "Implemented a favorites feature to allow users to save preferred recipes.",
        "Built client-side routing with React Router DOM for seamless navigation.",
        "Designed a responsive and user-friendly UI for smooth browsing.",
        "Optimized performance using React hooks like useState and useEffect, Context API."
      ],
      isOpen: true
    }
  });

  async function handleFromSubmit(event) {
    event.preventDefault();
    
    setLoading(true);
    
    try {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchParam}`);

      // Check if the response is successful
      if (!response.ok) {
        setSearchParam("");
        throw new Error("Couldn't find the recipe! Please try something else like chicken or apple.");
      }
    
      const resdata = await response.json();
      // Reset error message if response is successful
      setErrorMsg(""); // Clear error message on success
      if (resdata?.recipes) {
        setRecipeList(resdata.recipes);
        setSearchParam(""); // Clear the search input field after submitting
      }
    } catch (error) {
      setErrorMsg(error.message || "Couldn't find the recipe! Please try again.");
      setSearchParam(""); 
    } finally {
      setLoading(false);
    }
  }
  
  //console.log(errorMsg)

  function handleMarkFavorite(currentItem){
    //console.log(currentItem);
    const cpyFavoriteList = [...favoriteList];
    const index = cpyFavoriteList.findIndex(item=> item.recipe_id === currentItem.recipe_id);
    if(index === -1){
      cpyFavoriteList.push(currentItem);
    //pushing the currentItem to fav array if index not present
    }else{
      cpyFavoriteList.splice(index, 1);
    // when clicked on mark as fav, removing it from favlist if its already present.
    // basically this if else is to toggle mark as fav button
    }
    setFavoriteList(cpyFavoriteList);
  }
  
  //console.log("fav List:",favoriteList)
  //console.log(recipeList)

  return (
    <GlobalContext.Provider 
      value={{
          searchParam, setSearchParam, 
          handleFromSubmit, 
          loading, setLoading, 
          recipeList, 
          recipeDetailsData, 
          setRecipeDetailsData,
          handleMarkFavorite,
          favoriteList, setFavoriteList, 
          errorMsg, setErrorMsg,
          recipeSummaryModal, setRecipeSummaryModal
        }}>{children}</GlobalContext.Provider>);
}

