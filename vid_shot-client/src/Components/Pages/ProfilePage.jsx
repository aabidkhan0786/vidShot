import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../Redux/Actions/User";
import { useDispatch } from "react-redux";

const ProfilePage = () => {
  const {id} = useParams();
  const [userInfo, setUserInfo] = useState("");
  const dispatch = useDispatch();
  console.log(id);
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
        <div className="signup_cover">
          <img src={userInfo.img} alt={userInfo.username} />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
