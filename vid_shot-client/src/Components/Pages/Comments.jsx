import React, { useEffect } from 'react'

const Comments = ({ user, videoId }) => {
    console.log(user, videoId);
    // useEffect(() => {

    // }, [])

    

    return (
        <>
            <div>
                <div className='d-flex m-2'>
                    <img alt={user.username} src={user.img} className='small_dp' />
                    <input type="text" className='input_text w-100 px-2' />
                    <button className='basic_btn_cancel px-2'>
                        Comment
                    </button>
                </div>
            </div>
        </>
    )
}

export default Comments
