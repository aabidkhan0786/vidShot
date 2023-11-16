import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getUser } from '../../Redux/Actions/User';
import { format } from 'timeago.js';

const RecommendCard = ({v}) => {
    const [userRec,setUserRec] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const getUserById = () => {
            const userRecommend = dispatch(getUser(v?.userId));
            userRecommend.then((res) => setUserRec(res));
        };
        getUserById();
    }, [v?.userId]);

    return (
        <>
            <div className='caption_div'>
                <div className='d-flex'>
                    <div className='d-flex justify-content-center mt-2' >
                        <img src={v.imgUrl} className=''  height="80" width="160" alt={v.title} />
                    </div>
                    <div className='d-flex flex-column w-100 ps-2'>
                        <p className='no_padding' >{v.title}</p>
                        <div className='d-flex pt-1' >
                    <img src={userRec.img} className='small_dp' />
                        <p className='p-1' >{userRec.username}</p>

                        </div>
                        <div className='d-flex justify-content-between w-100' >
                        <p>{v.views} views</p>
                        <p className='lead mb-2 me-2' style={{ fontSize: "14px" }} >{format(v.createdAt)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecommendCard
