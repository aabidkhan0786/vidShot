import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../Redux/Actions/User";
import { useDispatch } from "react-redux";
import dummypic from "../../Assets/dummypp.jpg";

const ProfilePage = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState("");
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getUserById = async () => {
      const channels = dispatch(getUser(id));
      channels.then((res) => setUserInfo(res));
    };
    getUserById();
  }, []);

  console.log(userInfo);
  return (
    <>
      <div className="center_page">
        <div className="profile_cover shadow-lg">
          {edit ? 
              <>
              <div className="d-flex  justify-content-center w-100 my-2" >
                <img className="dp_img" src={dummypic}  alt={userInfo.username} />
              </div>
                <h3 className="w-100 text-center">{userInfo.username}</h3>
                <div className="d-flex justify-content-evenly lead text-center">
                  <h3 className=" text-center">Subscriber: 0</h3>
                  <h3 className=" ">video: 0</h3>
                  <h3 className="">Subscribed: 0</h3>
                </div>

              </>
          : 
            <>
              <img src={userInfo.img} alt={userInfo.username} />
              <button onClick={()=>setEdit(true)}>Edit</button>
            </>
          }
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
