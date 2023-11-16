import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getByTags } from '../../Redux/Actions/Video'
import { getUser } from '../../Redux/Actions/User'
import VideoCard from './VideoCard'
import RecommendCard from './RecommendCard'

const Recommendation = ({ video }) => {
    const dispatch = useDispatch()
    const [recommend, setRecommend] = useState([])

    useEffect(() => {
        const getVideoByTag = ()=>{
            const tagvideo = dispatch(getByTags(video.tags))
            tagvideo.then((res) => setRecommend(res.filter((vid) => vid._id !== video._id)))
        }
        getVideoByTag()
    }, [video.tags])


    console.log(video, recommend);
    return (
        <>
            <h5>Recommendations:</h5>
            {
                (recommend && recommend.length == 0) ?
                    <p className='text-center'>
                        "No similar video found!"
                    </p> :
                    recommend.map(v => (
                       <RecommendCard v={v} />
                    ))
            }
        </>
    )
}

export default Recommendation
