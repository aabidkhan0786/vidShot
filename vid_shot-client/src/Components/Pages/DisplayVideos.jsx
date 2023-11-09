import React, { useEffect } from 'react'
import VideoCard from './VideoCard';

const DisplayVideos = ({ videos }) => {
  console.log(videos);

  return (
    <>
    <div className='video_container'>
      {videos.map(video => (
        <>
          <VideoCard key={video._id} video={video} />
        </>
      ))
      }
    </div>
    </>
  )
}

export default DisplayVideos
