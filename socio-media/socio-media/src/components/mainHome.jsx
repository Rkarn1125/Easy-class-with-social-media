import Topbar from "../component/Navbar";

import Mainleft from "../component/mainleft";
import "../style/home.css";
import Feed from "../component/feed";
import Mainright from "../component/mainright";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
const MainHome = () => {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
 
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, []);
  let istrue = false;
  return (
    <>
      <Topbar />
      {istrue ? (
        <div className="homeContainer">
          <Mainleft />
          <Feed />
          <Mainright />
        </div>
      ) : (
        <div className="profile">
          <Mainleft />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src={user.coverImg? PF+user.coverImg : PF+"person/noCover.png"}
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src={user.profilePicture ? PF+user.profilePicture: PF+"person/noAvatar.png"}
                  alt=""
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed username={username}/>
              <Mainright user={user} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainHome;
