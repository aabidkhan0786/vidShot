import React, { useEffect, useState } from "react";
import { getUser } from "../../Redux/Actions/User";
import { useDispatch } from "react-redux";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

const VideoCard = ({ video }) => {
  const [channel, setChannel] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setChannel([])
    const getUserById = () => {
      const channels = dispatch(getUser(video.userId));
      channels.then((res) => setChannel(res));
    };
    getUserById();
  }, [video.userId]);


  return (
    <>
      {
        video ?
          <Link to={`/video/${video?._id}`} key={video._id} state={{ video, channel,type:"Normal" }} >
            <div className="video_design shadow-lg" key={video?._id}>
              <img
                src={video?.imgUrl}
                alt={video?.title}
                className="img-fluid img_thumbnail"
                loading="lazy"
              />
              <h4 className="m-1">{video?.title}</h4>
              <div className="d-flex flex-column">
                <div className="d-flex w-100 justify-content-between" >
                  {
                    channel?.length != 0 ?
                      <Link to={`/profile/${channel?._id}`} state={{ user: channel }} >
                        <div className="d-flex">
                          <Avatar src={channel?.img} className="sb-avatar__text_3" round={true} name={channel?.username} />
                          <h6 className="lead p-2">{channel?.username}</h6>
                        </div>
                      </Link> :
                      <span class="placeholder"></span>
                  }
                </div>
                <div className="d-flex justify-content-between lead" >
                  <h6 className="ps-1">{video?.views} view</h6>
                  <h6 className="pe-5">{format(video?.createdAt)}</h6>
                </div>
              </div>
            </div>
          </Link>
          : "loading"
      }
    </>
  );
};

export default VideoCard;
