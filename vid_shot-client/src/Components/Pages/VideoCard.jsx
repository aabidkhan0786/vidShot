import React, { useEffect, useState } from "react";
import { getUser, subsUser } from "../../Redux/Actions/User";
import { useDispatch } from "react-redux";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import axios from "axios";

const VideoCard = ({ video }) => {
  const [channel, setChannel] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserById = async () => {
      const channels = dispatch(getUser(video?.userId));
      channels.then((res) => setChannel(res));
    };
    getUserById();
  }, [video.userId]);
  console.log(channel, video);

  return (
    <>
      <Link to={`/video/${video?._id}`} key={video._id} state={{ video, channel }} >
        <div className="video_design shadow-lg" key={video?._id}>
          <img
            src={video?.imgUrl}
            alt={video?.title}
            className="img-fluid img_thumbnail"
          />
          <h4 className="m-1">{video?.title}</h4>
          <div className="d-flex flex-column">
            <div className="d-flex w-100 justify-content-between" >
              <Link to={`/profile/${channel?._id}`} >
                <div className="d-flex">
                  <img src={channel?.img} className="small_dp" alt={channel?.username} />
                  <h6 className="lead p-2">{channel?.username}</h6>
                </div>
              </Link>
            </div>
            <div className="d-flex justify-content-between lead" >
              <h6 className="ps-1">{video?.views} view</h6>
              <h6 className="pe-5">{format(video?.createdAt)}</h6>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
