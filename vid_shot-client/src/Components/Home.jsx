import React, { useEffect } from "react";
import Search from "./Menu/Search";
import DisplayVideos from "./Pages/DisplayVideos";
import { useDispatch, useSelector } from "react-redux";
import { displayVideos } from "../Redux/Actions/Video";

const Home = ({ type }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayVideos(type));
  }, [type]);


  return (
    <>
      <Search />
      <DisplayVideos />
    </>
  );
};

export default Home;