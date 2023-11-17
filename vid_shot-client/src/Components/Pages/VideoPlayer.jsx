import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { subsUser, unSubsUser } from '../../Redux/Actions/User';
import { disLikeVideo, likeVideo } from '../../Redux/Actions/Video';
import Comments from './Comments';
import Recommendation from './Recommendation';


const VideoPlayer = () => {
  const location = useLocation()
  const data = location.state;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.User);
  const video = useSelector((state) => state);

  console.log(auth.user);


  console.log(data.video);
  console.log({ both_state2: video });

  return (
    <>
      <div className='video_cover'>
        <video src={data.video.videoUrl} type="video/mp4" controls className='video_div' />
        <div className='d-flex justify-content-between'>
          <h4 className='p-2'>{data.video.title}</h4>
          <button className='basic_btn_cancel px-4 mt-2 like_btn'>
            {
              data?.video?.likes.includes(auth.user._id) ?
                <i className="fa-solid fa-heart" onClick={e => dispatch(disLikeVideo(data.video._id))} ></i> :
                <i className="fa-regular fa-heart" onClick={e => dispatch(likeVideo(data.video._id))} ></i>
            }
            {data?.video?.likes?.length}
          </button>
        </div>
        <div className='d-flex w-100 justify-content-between mx-2'>
          <Link to={`/profile/${data.channel?._id}`} state={{user:data?.channel}} >
            <div className='d-flex ' >
              <img src={data.channel.img} className='small_dp' alt={data.channel.username} />
              <p className='p-2' >{data.channel.username}</p>
            </div>
          </Link>
          <div className='me-5'>
            {
              auth.user._id !== data.channel._id ?
                <>
                  {auth?.user.subscribedUser.includes(data.channel._id) ?
                    <button className='basic_btn px-3' onClick={() => dispatch(unSubsUser(data.channel._id))} >Unsubscribe</button>
                    :
                    <button className='basic_btn px-3' onClick={() => dispatch(subsUser(data.channel._id))} >Subscribe</button>
                  }
                </> : ""
            }
          </div>
        </div>
        <div className='caption_div lead'>
          <p className='p-2 '>{data.video.desc}</p>
          <div className='d-flex' >
            {
              data.video.tags.map(tag => (
                <p>#{tag}</p>
              ))
            }
          </div>
        </div>
        <hr  className=" hr_style  opacity-50"  />
        <div className='d-flex  w-100 justify-content-between' style={{maxHeight: "600px", overflowY:"auto" }} >
          <div className='w-50 mx-3'>
            <Comments user={auth.user} videoId={data.video._id} />
          </div>
          <div className='w-50 mx-3'>
            <Recommendation video={data.video}  />
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoPlayer
