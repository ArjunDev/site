import { Route, Routes, Navigate } from 'react-router-dom';
import SideBarNav from './components/sidebar/sidebar-nav';
import Home from './components/sidebar/sidebar-tabs/home';
import Project3 from './components/sidebar/sidebar-tabs/projects/project3';
import Other from './components/sidebar/sidebar-tabs/other';
// import About from './components/sidebar/sidebar-tabs/about';
import { InputContext } from './components/sidebar/sidebar-tabs/projects/project3/kanban/input-context';
import Project1 from './components/sidebar/sidebar-tabs/projects/project1/project1';
import RecipeApp from './components/sidebar/sidebar-tabs/projects/project2/recipe-app/recipe-app';
import RecipeHome from './components/sidebar/sidebar-tabs/projects/project2/recipe-app/pages/home';
import Favorites from './components/sidebar/sidebar-tabs/projects/project2/recipe-app/pages/favorites';
import Details from './components/sidebar/sidebar-tabs/projects/project2/recipe-app/pages/details';
import FavRecipeDetails from './components/sidebar/sidebar-tabs/projects/project2/recipe-app/pages/favorites/Fav-recipe-details';


function App() {

  return (
      <div className='flex w-full min-h-screen flex-col sm:flex-row sm:w-full overflow-hidden'>
      <InputContext>
      <SideBarNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* default path to home, when visit site/ */}
        <Route path='/home' element={<Home/>} />
        <Route path='/other' element={<Other/>} />
        {/* <Route path='/about' element={<About/>} /> */}
        <Route path='/project'>
          <Route path="lms" element={<Project1 />} />
          <Route path="recipeapp" element={<RecipeApp/>}>
            <Route path="home" element={<RecipeHome/>}/>
            <Route path="home/recipe-item/:id" element={<Details/>}/>
            <Route path="favorites" element={<Favorites/>}/>
            <Route path='favorites/recipe-item/:id' element={<FavRecipeDetails/>}/>
          </Route>
          <Route path="kanban" element={<Project3 />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
        {/* navigate to home when goto url that doesn't exist. ex: home/nsdfsj */}
      </Routes>
      </InputContext>
      </div>
  )
}

export default App
