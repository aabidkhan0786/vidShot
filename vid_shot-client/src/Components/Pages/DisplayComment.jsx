import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getUser } from '../../Redux/Actions/User';
import { format } from "timeago.js";
import Avatar from 'react-avatar';

const DisplayComment = ({ comment }) => {
    const dispatch = useDispatch()
    const [userCom, setUserCom] = useState('')

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
                    <Avatar src={userCom.img} className="sb-avatar__text_3" round={true} name={userCom.username} />
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
export default DisplayComment;