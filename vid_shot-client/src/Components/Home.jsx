import React, { useEffect } from "react";
import Search from "./Menu/Search";
import { useDispatch, useSelector } from "react-redux";
import { displayVideos } from "../Redux/Actions/Video";
import VideoCard from "./Pages/VideoCard";

const Home = ({ type }) => {
  const dispatch = useDispatch();
  const video = useSelector(state => state.Video)

  useEffect(() => {
    dispatch(displayVideos(type));
  }, [type]);


  return (
    <>
      <Search />
      <div className='video_container'>
        {video?.length != 0 ? video?.map(vid => (
          <>
            <VideoCard key={video._id} video={vid} />
          </>
        )) : "No Video found!"
        }
      </div>
    </>
  );
};

export default Home;