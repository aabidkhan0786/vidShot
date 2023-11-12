import React from 'react'
import { useLocation } from 'react-router-dom'

const VideoPlayer = () => {
    const location = useLocation()
    const data = location.state
    // console.log(video);
  return (
    <>
    <div className='video_cover'>
      <video src={data.video.videoUrl} type = "video/mp4" controls className='video_div' />
      <h4 className='p-2'>{data.video.title}</h4>
      <h5 className='p-2'>{data.video.desc}</h5>
      <div>
        <img src={data.channel.img} alt={data.channel.username} />
      </div>
    </div>
    </>
  )
}

export default VideoPlayer
