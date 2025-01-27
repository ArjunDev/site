import { Route, Routes, Navigate } from 'react-router-dom';
import SideBarNav from './components/sidebar/sidebar-nav';
import Home from './components/sidebar/sidebar-tabs/home';
import Profile from './components/sidebar/sidebar-tabs/projects/profile';
import Settings from './components/sidebar/sidebar-tabs/projects/Settings';
import Project3 from './components/sidebar/sidebar-tabs/projects/project3';
import Other from './components/sidebar/sidebar-tabs/other';
import About from './components/sidebar/sidebar-tabs/about';

function App() {

  return (

      <div className='flex bg-gray-500'>
      <SideBarNav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/*<Route path='/dashboard' element={<DashboardHome />}> */}
        <Route path='/project'>
          <Route index element={<Navigate to="/project/profile" replace />} /> 
          {/*To navigate to profile by defaul when clicked on dashboard*/}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="kanban" element={<Project3 />} />
        </Route>
        <Route path='/other' element={<Other/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      </div>
  )
}

export default App
