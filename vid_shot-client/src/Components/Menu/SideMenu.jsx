import React from "react";
import "../style.css";
import dummypic from "../../Assets/dummypp.jpg";
import logo from "../../Assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Actions/User";

const SideMenu = ({setOpen}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.User);
  console.log(auth.user);

  return (
    <>
      <div className="side_menu">
        <h5 className="mx-2 py-2">
          <img width="50" src={logo} alt="logo" />
          VidShot
        </h5>
        <div className="d-flex justify-content-center my-2">
          <div className="profile d-flex  justify-content-center my-1 shadow-lg">
            <div className="d-flex  flex-column">
              <div className="d-flex justify-content-center">
                <img className="pp_img" src={auth?.user?.img} alt="display" />
              </div>
              <p className="text-center my-1">{auth?.user?.username}</p>
              <div className="d-flex justify-content-between w-100">
                <p className="border-end">
                  Subscriber: {auth?.user?.subscriber}
                </p>
                |<p className="px-1">Videos: {auth?.user?.video || "0"}</p>
              </div>
              <Link to={`/profile/${auth?.user?._id}`} >
                <button className="basic_btn width_btn">
                <i className="fa-solid fa-user px-1"></i>Profile
                </button>
                </Link>
            </div>
          </div>
        </div>
        <div className="my-3 mx-2 d-flex flex-column">
          <Link to="/addvideo">
          <i className="fa-solid fa-file-video lead px-2 py-3"></i>
            Add Video
          </Link>
          <Link to="/trend" >
            <i className="fa-solid fa-arrow-trend-up lead px-2"></i>
            Trending
          </Link>
          <Link to="/subscribed">
            <i className="fa-brands fa-squarespace lead px-2 py-3"></i>Subscription
          </Link>
          <Link to={`/settings/${auth.user._id}`}>
          <i className="fa-solid fa-gears lead px-2 "></i>Settings
          </Link>
          <button className="basic_btn my-3" onClick={() => dispatch(logout(navigate))}>
            <i
              className="fa-solid fa-right-from-bracket lead px-1"
            ></i>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
