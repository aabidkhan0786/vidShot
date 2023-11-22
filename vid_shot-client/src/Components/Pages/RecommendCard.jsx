import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getUser } from '../../Redux/Actions/User';
import { format } from 'timeago.js';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

const RecommendCard = ({ v }) => {
    const [userRec, setUserRec] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const getUserById = () => {
            setUserRec()
            const userRecommend = dispatch(getUser(v?.userId));
            userRecommend.then((res) => setUserRec(res));
        };
        getUserById();
    }, [v?.userId]);

    return (
        <>
            <Link to={`/video/${v?._id}`} key={v._id} state={{ video: v, channel: userRec,type:"Recommend" }} >
                <div className='caption_div'>
                    <div className='d-flex'>
                        <div className='d-flex justify-content-center mt-2' >
                            <img src={v?.imgUrl} height="80" width="160" alt={v?.title} />
                        </div>
                        <div className='d-flex flex-column w-100 ps-2'>
                            <p className='no_padding' >{v.title}</p>
                            <Link to={`/profile/${userRec?._id}`} state={{ user: userRec }} >
                                <div className='d-flex pt-1' >
                                    <Avatar src={userRec?.img} name={userRec?.username} className="sb-avatar__text_3" round={true} />
                                    <p className='p-1' >{userRec?.username}</p>
                                </div>
                            </Link>
                            <div className='d-flex justify-content-between w-100' >
                                <p>{v?.views} views</p>
                                <p className='lead mb-2 me-2' style={{ fontSize: "14px" }} >{format(v?.createdAt)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default RecommendCard;