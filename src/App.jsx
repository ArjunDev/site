import { Route, Routes } from 'react-router-dom';
import SideBarNav from './components/sidebar/sidebar-nav';
import About from './components/sidebar/sidebar-tabs/about';
import Projects from './components/sidebar/sidebar-tabs/projects';
import Services from './components/sidebar/sidebar-tabs/services';
import Home from './components/sidebar/sidebar-tabs/home';
import Profile from './components/sidebar/sidebar-tabs/dashboard/Profile';
import Settings from './components/sidebar/sidebar-tabs/dashboard/Settings';
import Reports from './components/sidebar/sidebar-tabs/dashboard/Reports';
//import DashboardHome from './components/sidebar-tabs/dashboard/DashboardHome';
import { Navigate } from "react-router-dom";

function App() {

  return (

      <div className='flex bg-gray-500'>
      <SideBarNav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/*<Route path='/dashboard' element={<DashboardHome />}> */}
          <Route path='/dashboard'>
          <Route index element={<Navigate to="/dashboard/profile" replace />} /> 
          {/*To navigate to profile by defaul when clicked on dashboard*/}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path='/services' element={<Services/>}/>
        <Route path='/projects' element={<Projects/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      </div>
  )
}

export default App
