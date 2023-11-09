import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import Home from './Components/Home';
import PrivateRoutes from './PrivateRoutes';
import AddVideos from './Components/Pages/AddVideos';
import SideMenu from './Components/Menu/SideMenu';
import ProfilePage from './Components/Pages/ProfilePage';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <div className='layout_cover'>
    <div className="side_bar">
          <SideMenu />
    </div>
    <div className='main_content'>
          <Routes>
            <Route path="/signin" element={<Login/>}/> 
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/" element={<PrivateRoutes/>}>
              <Route index element={<Home type="random" />} />
              <Route path="trend" element={<Home type="trend" />} />
              <Route path="subscribed" element={<Home type="subsVideo" />} />
            </Route>
              <Route path="/addvideo" element={<AddVideos />} />
              <Route path="/profile/:id" element={<ProfilePage />} />
          </Routes>
    </div>

      </div>
      </BrowserRouter>
    </>
  )
}

export default App
