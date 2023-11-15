import React, { useState } from "react";
import loginPic from "../../Assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../Redux/Actions/User";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../Firebase/firebase";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = () => {
    const creds = {
      email,
      password,
    };
    console.log({ creds });
    dispatch(signIn(creds, navigate));
  };

  const signInGoogle =()=>{
    signInWithPopup(auth,provider).then(result=> console.log(result))
    .catch(error=> console.log(error))
  }
  return (
    <>
      <div className="center_page  shadow-lg">
        <div className="profile_cover">
          <div className="login_pic">
            <img
              className="img_login"
              src={loginPic}
              alt="register"
              loading="lazy"
            />
          </div>
          <div className="login_form_cover">
            <div className="login_form">
              <h3 className="text-center text-decoration-underline">VidShot</h3>
              <div className="d-flex flex-column p-3">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vidshot@email.com"
                  className="input_design"
                />
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="input_design"
                />
              </div>
              <button className="btn basic_btn w-100" onClick={handleSignIn}>
                Sign In
              </button>
              {/* <button onClick={signInGoogle} >Sign In with google</button> */}
              <h5 className="lead mt-3">
                New to VidShot? <Link to="/signup">SignUp</Link>
              </h5>
            </div>
          </div>

          {/* <div className='register_pic'>
                    <img className='img_register' src={registerPic} alt="register" />
                </div>
                <div className='register_form'>
                    <h3 className='text-center my-3 text-decoration-underline'>VidShot</h3>
                    <div className='d-flex flex-column p-3' >
                        <input type="email" placeholder='vidshot@email.com' className='input_design' />
                        <input type="text" placeholder='username' className='input_design' />
                        <input type="password" placeholder='********' className='input_design' />
                    </div>
                    <button className='btn basic_btn'>Sign Up</button>
                    <h5 className='lead mt-5' >Already VidShot member? <Link to="/signin" >Login</Link></h5>
                </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
