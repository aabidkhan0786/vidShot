import React, { useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import Search from "./Search";
import AddVideos from "./Pages/AddVideos";
import DisplayVideos from "./Pages/DisplayVideos";
import { useDispatch } from "react-redux";
import { displayVideos } from "../Redux/Actions/Video";



const Home = ({type}) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=>{
    const showVideo= ()=>{
      const result = dispatch(displayVideos(type))
      result.then(res=> console.log(res,type))
    }
    showVideo()
  },[type])

  return (
    <>
      <div className="layout_cover">
        <div className="side_bar">
          <SideMenu setOpen={setOpen} />
        </div>
        <div className="main_content d-flex flex-column ">
          {open ? <AddVideos /> :
            <>       
            <Search />
            <DisplayVideos/>
            </>
          }
        </div>
      </div>
    </>
  );
};

export default Home;
