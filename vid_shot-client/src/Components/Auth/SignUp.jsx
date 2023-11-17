import React, { useState } from 'react'
import registerPic from "../../Assets/register.png"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUp } from '../../Redux/Actions/User'

const SignUp = () => {
  const [userName,setUserName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignUp =()=>{
    const creds = {
      username:userName,
      email,
      password
    }
    dispatch(signUp(creds,navigate))
  }

  return (
    <>
      <div className='center_page   shadow-lg' >
            <div className='signup_cover '>
                <div className='register_pic'>
                    <img className='img_register' src={registerPic} alt="register" />
                </div>
                <div className='register_form mt-4' >
                    <h3 className='text-center my-3 text-decoration-underline'>VidShot</h3>
                    <div className='d-flex flex-column p-3' >
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='vidshot@email.com' className='input_design' />
                        <input type="text" onChange={(e)=>setUserName(e.target.value)} placeholder='username' className='input_design' />
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='********' className='input_design' />
                    </div>
                    <button className='btn basic_btn' onClick={handleSignUp}>Sign Up</button>
                    <h5 className='lead mt-5' >Already VidShot member? <Link to="/signin" >Login</Link></h5>
                </div>
            </div>
      </div>
    </>
  )
}

export default SignUp
