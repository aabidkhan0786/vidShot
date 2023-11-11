import React from 'react'
import { useLocation } from 'react-router-dom'

const VideoPlayer = () => {
    const location = useLocation()
    const video = location.state
    console.log(video);
  return (
    <>
      video
    </>
  )
}

export default VideoPlayer
