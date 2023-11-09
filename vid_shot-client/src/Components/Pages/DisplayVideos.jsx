import React from 'react'

const DisplayVideos = ({ videos }) => {
  console.log(videos);
  return (
    <>
    <div className='video_container' >
      {videos.map(video => (
        <>
          <div className='video_design shadow-lg' key={video._id}>
            <img src={video.imgUrl} alt={video.title} className='img-fluid img_thumbnail' />
          </div>
        </>
      ))
      }

    </div>
    </>
  )
}

export default DisplayVideos
