import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import Home from './Components/Home';
import PrivateRoutes from './PrivateRoutes';
import AddVideos from './Components/Pages/AddVideos';

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<Login/>}/> 
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/" element={<PrivateRoutes/>}>
              <Route index element={<Home type="random" />} />
              <Route path="trend" element={<Home type="trend" />} />
              <Route path="subscribed" element={<Home type="subsVideo" />} />
              <Route element={<AddVideos />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
