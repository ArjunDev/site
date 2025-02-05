import { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import SideBarNav from './components/sidebar/sidebar-nav';
import Home from './components/sidebar/sidebar-tabs/home';
import Project3 from './components/sidebar/sidebar-tabs/projects/project3';
import Other from './components/sidebar/sidebar-tabs/other';
import About from './components/sidebar/sidebar-tabs/about';
import { InputContext } from './components/sidebar/sidebar-tabs/projects/project3/kanban/input-context';
import Project1 from './components/sidebar/sidebar-tabs/projects/project1/project1';
//import Project2 from './components/sidebar/sidebar-tabs/projects/project2/project2';
import RecipeApp from './components/sidebar/sidebar-tabs/projects/project2/recipe-app/recipe-app';
import RecipeHome from './components/sidebar/sidebar-tabs/projects/project2/recipe-app/pages/home';
import Favorites from './components/sidebar/sidebar-tabs/projects/project2/recipe-app/pages/favorites';
import Details from './components/sidebar/sidebar-tabs/projects/project2/recipe-app/pages/details';

function App() {

  const [lastVisitedPage, setLastVisitedPage] = useState(localStorage.getItem("lastVisitedPage"));
  const location = useLocation();

  useEffect(() => {
    // Update last visited page whenever the user navigates
    if (location.pathname !== "/project") {
      setLastVisitedPage(location.pathname);
      localStorage.setItem("lastVisitedPage", location.pathname);
    }
  }, [location]);

  return (
      <div className='flex w-full min-h-screen flex-col sm:flex-row sm:w-full overflow-hidden'>
      <InputContext>
      <SideBarNav/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/other' element={<Other/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project'>
          {/* <Route index element={<Navigate to="/project/kanban" replace />}/>  */}
          
           {/* Show the last visited page by default */}
          {/* <Route path="/project" element={<Navigate to={lastVisitedPage} replace />} /> */}
          <Route path="project1" element={<Project1 />} />
          <Route path="project2" element={<RecipeApp/>}>
            <Route path="recipehome" element={<RecipeHome/>}/>
            <Route path="favorites" element={<Favorites/>}/>
            <Route path="recipehome/recipe-item/:id" element={<Details/>}/>
          </Route>
          <Route path="kanban" element={<Project3 />} />
        </Route>
      </Routes>
      </InputContext>
      </div>
  )
}

export default App
