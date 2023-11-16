import React, { useEffect } from 'react'
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';

const DisplayVideos = () => {
  const video = useSelector(state=> state.Video)
  console.log({state_video:video});

  return (
    <>
    <div className='video_container'>
      {video && video?.map(vid => (
        <>
          <VideoCard key={video._id} video={vid} />
        </>
      ))
      }
    </div>
    </>
  )
}

export default DisplayVideos
