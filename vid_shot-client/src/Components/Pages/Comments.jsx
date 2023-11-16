import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getComment } from '../../Redux/Actions/Comment';
import { getUser } from '../../Redux/Actions/User';
import DisplayComment from './DisplayComment';

const Comments = ({ user, videoId }) => {
    const [comment, setComment] = useState("")
    const [userCom, setUserCom] = useState("")
    const dispatch = useDispatch()
    const comments = useSelector(state => state.Comment)
    console.log(user._id, videoId, comments);


    const handleComment = () => {
        const commentDetails = {
            userId: user._id,
            videoId,
            desc: comment
        }
        dispatch(addComment(commentDetails))
        setComment("")
    }
    useEffect(() => {
        dispatch(getComment(videoId))
    }, [])

    console.log(comment);
    return (
        <>
            <div>
                <div className='d-flex m-2'>
                    <img alt={user.username} src={user.img} className='small_dp' />
                    <input type="text" placeholder={`${user.username}, add comment`} className='input_text w-100 px-2' value={comment} onChange={e => setComment(e.target.value)} />
                    <button className='basic_btn_cancel px-2' onClick={handleComment} >
                        Comment
                    </button>
                </div>
                <h5>Comments:</h5>
                <div>
                    {
                        (comments && comments.length == 0) ?
                        <p className='text-center'>
                        Be the first person to comment!
                    </p>:
                        comments?.map(com => (
                            <DisplayComment comment={com} />
                        ))
                        

                    }
                </div>
            </div>
        </>
    )
}
export default Comments;