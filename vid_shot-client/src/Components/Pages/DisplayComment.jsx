import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getUser } from '../../Redux/Actions/User';
import { format } from "timeago.js";

const DisplayComment = ({ comment }) => {
    const dispatch = useDispatch()
    const [userCom, setUserCom] = useState('')

    console.log({get_user_inside_comment:comment});
    useEffect(() => {
        const getUserById = () => {
            const userComment = dispatch(getUser(comment?.userId));
            userComment.then((res) => setUserCom(res));
        };
        getUserById();
    }, [comment?.userId]);

    return (
        <>
            <div className='d-flex caption_div flex-column my-3' >
                <div className='d-flex pt-1 no_padding'>
                    <img src={userCom.img} className='small_dp' />
                    <p className='p-2 no_padding'>
                        {userCom.username}
                    </p>
                </div>
                <div className='d-flex justify-content-between w-100' >
                    <p className='no_padding' >
                        {comment.desc}
                    </p>
                    <p className='lead mt-2 me-2' style={{ fontSize: "14px" }} >{format(comment.createdAt)}</p>
                </div>
            </div>
        </>
    )
}

export default DisplayComment