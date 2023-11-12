import React, { useEffect, useState } from "react";
import { getUser } from "../../Redux/Actions/User";
import { useDispatch } from "react-redux";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const [channel, setChannel] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const getUserById = async () => {
      const channels = dispatch(getUser(video.userId));
      channels.then((res) => setChannel(res));
    };
    getUserById();
  }, []);
  console.log(channel._id);

  return (
    <>
    <Link to={`/video/${video._id}`} state={{video,channel}} >
      <div className="video_design shadow-lg" key={video._id}>
        <img
          src={video.imgUrl}
          alt={video.title}
          className="img-fluid img_thumbnail"
        />
        <h4 className="m-1">{video.title}</h4>
        <div className="d-flex">
          <img src={channel.img} alt={channel.username} />
          <div>
            <h6>{channel.username}</h6>
            <h6>{video.views}</h6>
            <h6>{format(video.createdAt)}</h6>
          </div>
        </div>
      </div>
    </Link>
    </>
  );
};

export default VideoCard;
