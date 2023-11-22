import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { subsUser, unSubsUser } from '../../Redux/Actions/User';
import { currentVideo, disLikeVideo, likeVideo } from '../../Redux/Actions/Video';
import Comments from './Comments';
import Recommendation from './Recommendation';
import Avatar from 'react-avatar';


const VideoPlayer = () => {
  const location = useLocation()
  const data = location.state;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.User);
  const cvideo = useSelector((state) => state.CurrentVideo);

  useEffect(()=>{
    dispatch(currentVideo(data.video))
  },[data.video])

  console.log(cvideo);

  return (
    <>
    {
      cvideo?.length != 0 ?
      <div className='video_cover'>
        <video src={cvideo?.videoUrl} type="video/mp4" controls className='video_div' />
        <div className='d-flex justify-content-between'>
          <h4 className='p-2'>{cvideo?.title}</h4>
          <button className='basic_btn_cancel px-4 mt-2 like_btn'>
            {
              cvideo?.likes?.includes(auth?.user._id) ?
                <i className="fa-solid fa-heart" onClick={e => dispatch(disLikeVideo(cvideo?._id))} ></i> :
                <i className="fa-regular fa-heart" onClick={e => dispatch(likeVideo(cvideo?._id))} ></i>
            }
            {
              cvideo?.likes?.length
            }
          </button>
        </div>
        <div className='d-flex w-100 justify-content-between mx-2'>
          <Link to={`/profile/${data.channel?._id}`} state={{ user: data?.channel }} >
            <div className='d-flex ' >
              <Avatar src={data.channel.img} className="sb-avatar__text_3" round={true} name={data.channel.username} />
              <p className='p-2' >{data.channel.username}</p>
            </div>
          </Link>
          <div className='me-5'>
            {
              auth.user._id !== data.channel._id ?
                <>
                  {auth?.user.subscribedUser.includes(data.channel._id) ?
                    <button className='basic_btn px-3' onClick={() => dispatch(unSubsUser(data.channel._id))}> <i className="fa-solid fa-minus p-1"></i> Unsubscribe</button>
                    :
                    <button className='basic_btn px-3' onClick={() => dispatch(subsUser(data.channel._id))} > <i className="fa-solid fa-plus p-1"></i>Subscribe</button>
                  }
                </> : ""
            }
          </div>
        </div>
        <div className='caption_div lead'>
          <p className='p-2 '>{cvideo?.desc}</p>
          <div className='d-flex' >
            {
              cvideo?.tags.map(tag => (
                <p>#{tag}</p>
              ))
            }
          </div>
        </div>
        <hr className="hr_style  opacity-50" />
        <div className='d-flex  w-100 justify-content-between' style={{ maxHeight: "600px", overflowY: "auto" }} >
          <div className='w-50 mx-3'>
            <Comments user={auth.user} videoId={data.video._id} />
          </div>
          <div className='w-50 mx-3'>
            <Recommendation video={data.video} />
          </div>
        </div>
      </div>:
      <center>Loading...</center>

    }
    </>
  )
}

export default VideoPlayer;