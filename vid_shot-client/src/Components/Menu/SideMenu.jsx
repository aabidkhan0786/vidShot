import React, { useEffect, useState } from "react";
import "../style.css";
import dummypic from "../../Assets/dummypp.jpg";
import logo from "../../Assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Actions/User";
import { getVideo } from "../../Redux/Actions/Video";
import Avatar from "react-avatar";

const SideMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.User);
  const video = useSelector((state) => state.Video);
  const [myVideo, setMyVideo] = useState([])

  useEffect(() => {
    const getMyVideos = () => {
      const videos = dispatch(getVideo(auth?.user?._id))
      videos.then(res => setMyVideo(res))
    }
    getMyVideos()
  }, [auth?.user?._id, video])

  return (
    <>
      <div className="side_menu">
        <h5 className="mx-2 py-2">
          <img width="50" src={logo} alt="logo" />
          VidShot
        </h5>
        {
          auth?.user ?
            <>
              <div className="d-flex justify-content-center my-2">
                <div className="profile d-flex  justify-content-center my-1 shadow-lg">
                  <div className="d-flex  flex-column">
                    <div className="d-flex justify-content-center">
                      <Avatar name={auth?.user?.username} className="sb-avatar__text_2" src={auth?.user?.img} round={true} />
                    </div>
                    <p className="text-center my-1">{auth?.user?.username}</p>
                    <div className="d-flex justify-content-between mt-1 w-100">
                      <p className="border-end">
                        Subscriber: {auth?.user?.subscriber}
                      </p>
                      |<p className="px-1">Videos: {myVideo?.length || "0"}</p>
                    </div>
                    <Link to={`/profile/${auth?.user?._id}`} state={{ user: auth?.user }} >
                      <button className="basic_btn width_btn mt-2 mb-1">
                        <i className="fa-solid fa-user px-1"></i>Profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="my-3 mx-2 d-flex flex-column">
                <Link to="/myvideo" state={{ myVideo }} >
                  <i className="fa-solid fa-play lead px-2 py-2"></i>
                  My Video
                </Link>
                <Link to="/addvideo">
                  <i className="fa-solid fa-file-video lead px-2 py-2"></i>
                  Add Video
                </Link>
                <Link to="/trend" >
                  <i className="fa-solid fa-arrow-trend-up lead px-2 py-2"></i>
                  Trending
                </Link>
                <Link to="/subscribed">
                  <i className="fa-brands fa-squarespace lead px-2 py-2"></i>Subscription
                </Link>
                <button className="basic_btn my-3" onClick={() => dispatch(logout(navigate))}>
                  <i
                    className="fa-solid fa-right-from-bracket lead px-1"
                  ></i>
                  Logout
                </button>
              </div>
            </> :
            <>
              <div className="d-flex justify-content-center align-items-center w-100 h-100">
                <div className="d-flex flex-column justify-content-center text-center">
                  <h5>More By AAK:</h5>
                  <a href="https://a-socials-client.vercel.app/login" target="_blank" ><u>
                    aSocials
                  </u></a>
                </div>
              </div>
            </>
        }
      </div>
    </>
  );
};

export default SideMenu;