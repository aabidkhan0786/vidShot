import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getComment } from '../../Redux/Actions/Comment';
import DisplayComment from './DisplayComment';
import Avatar from 'react-avatar';

const Comments = ({ user, videoId }) => {
    const [comment, setComment] = useState("")
    const dispatch = useDispatch()
    const comments = useSelector(state => state.Comment)

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
    }, [videoId])

    return (
        <>
            <div>
                <div className='d-flex m-2'>
                    <Avatar name={user.username} src={user.img} className="sb-avatar__text_3" round={true} />
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
                            </p> :
                            comments?.flat().sort((a, b) => b.createdAt - a.createdAt).map(com => (
                                <DisplayComment comment={com} />
                            ))
                    }
                </div>
            </div>
        </>
    )
}
export default Comments;