import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getUser } from '../../Redux/Actions/User';
import { format } from "timeago.js";

const DisplayComment = ({ comment }) => {
    const dispatch = useDispatch()
    const [userCom, setUserCom] = useState('')
    useEffect(() => {
        const getUserById = async () => {
            const userComment = dispatch(getUser(comment?.userId));
            userComment.then((res) => setUserCom(res));
        };
        getUserById();
    }, [comment]);
    return (
        <>
            <div className='d-flex caption_div flex-column my-3'>
                <div className='d-flex pt-1'>
                    <img src={userCom.img} className='small_dp' />
                    <p className='p-2'>
                        {userCom.username}
                    </p>
                </div>
                <div className='d-flex justify-content-between w-100' >
                    <p>
                        {comment.desc}
                    </p>
                    <p className='lead mt-2 me-2' style={{fontSize:"14px"}} >{format(comment.createdAt)}</p>
                </div>
            </div>
        </>
    )
}

export default DisplayComment
