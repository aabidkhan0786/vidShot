import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { editUser, getUser, subsUser, unSubsUser } from "../../Redux/Actions/User";
import { useDispatch, useSelector } from "react-redux";
import CryptoJS from "crypto-js";
import { getVideo } from "../../Redux/Actions/Video";
import Avatar from "react-avatar";

const ProfilePage = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState("");
  const [edit, setEdit] = useState(false);
  const [desc, setDesc] = useState('');
  const [password, setPassword] = useState('');
  const [img, setImg] = useState('');
  const [video, setVideo] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useLocation().state;
  const auth = useSelector((state) => state.User);

  useEffect(() => {
    const getUserById = () => {
      const channels = dispatch(getUser(id));
      channels.then((res) => {
        setUserInfo(res)
        setDesc(res.desc)
        setImg(res.img)
        unHasedPassword(res.password)
      }
      );
    };
    getUserById();
  }, [id, auth]);

  useEffect(() => {
    const getMyVideos = () => {
      const videos = dispatch(getVideo(data?.user?._id))
      videos.then(res => setVideo(res))
    }
    getMyVideos()
  }, [data.user._id])

  const unHasedPassword = (hashPassword) => {
    const hashedpass = CryptoJS.AES.decrypt(hashPassword, "aabid0204");
    const password = hashedpass.toString(CryptoJS.enc.Utf8);
    setPassword(password);
  };

  const convertBase64 = (e) => {
    e.preventDefault();
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImg(reader.result);
    };
    reader.onerror = (error) => {
      console.log(error);
    };
  };

  const handleEdit = () => {
    const editDetails = {
      img,
      desc,
      password
    }
    dispatch(editUser(userInfo._id, editDetails))
    navigate("/")
  }

  return (
    <>
      <div className="center_page">
        <div className="profile_cover shadow-lg">
          {edit ?
            <>
              <div className="d-flex justify-content-center flex-column w-100 my-2" >
                <center>
                  <Avatar className="edit_profile" name={userInfo?.username} src={userInfo?.img} round={true} />
                  <label style={{ "cursor": "pointer" }} className="text-center w-100" for="profilePic" >Change Profile Picture</label>
                  <input type="file" accept="image/*" id="profilePic" hidden onChange={(e) => convertBase64(e)} />
                </center>
              </div>
              <div className="d-flex px-2 my-3" >
                <div className="w-10 d-flex flex-column">
                  <label className="p-2 my-1">Username:</label>
                  <label className="p-2 my-1">Email:</label>
                  <label className="p-2 my-1">Password:</label>
                  <label className="p-2 my-1">Caption:</label>
                </div>
                <div className="d-flex w-100">
                  <div className="w-25 d-flex flex-column">
                    <input value={userInfo.username} className="input_profile my-1  p-2" disabled />
                    <input value={userInfo.email} className="input_profile my-1  p-2" disabled />
                    <input value={password}
                      onChange={e => setPassword(e.target.value)}
                      className="input_profile my-1 p-2" />
                    <textarea value={desc} onChange={e => setDesc(e.target.value)} className="my-1 text_profile  p-2" />
                  </div>
                  <div className="d-flex w-50 justify-content-center" >
                    {
                      img ?
                        <>
                          <p>Preview:</p>
                          <img src={img} alt="preview" width="200" height="200" className="img-fluid px-2" />
                        </>
                        : ""
                    }
                  </div>
                </div>
              </div>
              <center className="mb-3">
                <button className="basic_btn_cancel w-25" onClick={() => setEdit(false)} >Cancel</button>
                <button className="basic_btn w-25" onClick={handleEdit} >Save</button>
              </center>
            </>
            :
            <>
              <div className="d-flex justify-content-center w-100 my-2"   >
                <Avatar style={{ width: "300px", height: "300px" }} className="sb-avatar__text_1" name={userInfo?.username} src={userInfo.img} round={true} />
              </div>
              <h3 className="w-100 text-center">{userInfo.username}</h3>
              <h3 className="w-100 text-center">{userInfo.desc}</h3>
              <div className="d-flex justify-content-evenly lead text-center">
                <h3 className=" text-center">Subscriber: {userInfo?.subscriber}</h3>
                <h3 className=" ">video: {video?.length}</h3>
                <h3 className="">Subscribed: {userInfo?.subscribedUser?.length}</h3>
              </div>
              <div className="d-flex  justify-content-center w-100 mb-3" >
                {
                  auth.user._id === data.user._id ?
                    <button className="basic_btn px-2 mx-3 w-25" onClick={() => setEdit(true)}>
                      <i className="fa-solid fa-user-pen p-1"></i>Edit Profile</button>
                    :
                    <>
                      {auth?.user.subscribedUser.includes(data.user._id) ?
                        <button className='basic_btn px-3' onClick={() => dispatch(unSubsUser(data.user._id))} ><i className="fa-solid fa-minus p-1"></i>Unsubscribe</button>
                        :
                        <button className='basic_btn px-3' onClick={() => dispatch(subsUser(data.user._id))}><i className="fa-solid fa-plus p-1"></i> Subscribe</button>
                      }
                    </>
                }
              </div>
            </>
          }
        </div>
      </div>
    </>
  );
};
export default ProfilePage;