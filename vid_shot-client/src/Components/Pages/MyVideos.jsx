import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import VideoCard from './VideoCard'

const MyVideos = () => {
  const location = useLocation()
  const data = location.state

  return (
    <div className='video_container'>
      {
        data.myVideo.length != 0 ? data && data.myVideo.map(video => (
          <VideoCard key={video._id} video={video} />
        )) :
          <>
            <Link className='text-center w-100' to="/addvideo">
              <h5>Please add video</h5>
            </Link>
          </>
      }
    </div>
  )
}
export default MyVideos;