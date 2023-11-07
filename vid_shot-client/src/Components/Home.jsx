import React, { useState } from "react";
import SideMenu from "./SideMenu";
import Search from "./Search";
import AddVideos from "./Pages/AddVideos";



const Home = () => {
    const [open,setOpen]= useState(false)
  return (
    <>
      <div className="layout_cover">
        <div className="side_bar">
          <SideMenu setOpen={setOpen} />
        </div>
        <div className="main_content d-flex flex-column ">
         
        {open ? <AddVideos/> :  <Search/> }
        </div>
      </div>
    </>
  );
};

export default Home;
