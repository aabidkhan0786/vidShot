import React, { useEffect, useState } from "react";
import SideMenu from "./Menu/SideMenu";
import Search from "./Menu/Search";
import AddVideos from "./Pages/AddVideos";
import DisplayVideos from "./Pages/DisplayVideos";
import { useDispatch } from "react-redux";
import { displayVideos } from "../Redux/Actions/Video";


const Home = ({type}) => {
  const [open, setOpen] = useState(false)
  const [videos,setVideos] = useState([])
  const dispatch = useDispatch()

  useEffect(()=>{
    const showVideo= ()=>{
      const result = dispatch(displayVideos(type))
      result.then(res=> 
        setVideos(res)
        )
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
            <DisplayVideos videos={videos} />
            </>
          }
        </div>
      </div>
    </>
  );
};

export default Home;
