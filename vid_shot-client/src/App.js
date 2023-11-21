import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import Home from "./Components/Home";
import PrivateRoutes from "./PrivateRoutes";
import AddVideos from "./Components/Pages/AddVideos";
import SideMenu from "./Components/Menu/SideMenu";
import ProfilePage from "./Components/Pages/ProfilePage";
import VideoPlayer from "./Components/Pages/VideoPlayer";
import Layout from "./Components/Home";
import MyVideos from "./Components/Pages/MyVideos";
import Avatar from 'react-avatar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="layout_cover">
          <div className="side_bar" >
            <SideMenu />
          </div>
          <div className="main_content">
            <Routes>
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<PrivateRoutes />}>
                <Route index element={<Home type="random" />} />
                <Route path="trend" element={<Home type="trend" />} />
                <Route path="subscribed" element={<Home type="subsvideo" />} />
                <Route path="addvideo" element={<AddVideos />} />
                <Route path="myvideo" element={<MyVideos />} />
                <Route path="profile/:id" element={<ProfilePage />} />
                <Route path="video/:id" element={<VideoPlayer />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;