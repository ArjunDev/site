import { Route, Routes, Navigate } from 'react-router-dom';
import SideBarNav from './components/sidebar/sidebar-nav';
import Home from './components/sidebar/sidebar-tabs/home';
import Other from './components/sidebar/sidebar-tabs/other';
import Project1 from './components/sidebar/sidebar-tabs/projects/project1';
import RecipeApp from './components/sidebar/sidebar-tabs/projects/project2';
import Project3 from './components/sidebar/sidebar-tabs/projects/project3';

function App() {

  return (
      <div className='flex w-full min-h-screen flex-col sm:flex-row sm:w-full overflow-hidden'>
      <SideBarNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* default path to home, when visit site/ */}
        <Route path='/home' element={<Home/>} />
        <Route path='/other' element={<Other/>} />
        <Route path='/project'>
          <Route path="lms" element={<Project1 />} />
          <Route path="recipe-app" element={<RecipeApp/>}>
          </Route>
          <Route path="kanban" element={<Project3 />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
        {/* navigate to home when goto url that doesn't exist. ex: home/nsdfsj */}
      </Routes>
      </div>
  )
}

export default App
