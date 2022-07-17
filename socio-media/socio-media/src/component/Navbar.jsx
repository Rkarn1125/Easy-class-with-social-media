import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";
import { AuthContext } from '../context/AuthContext';
export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo"><Link className="linktext" to="/">Easyclass</Link> </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <input
            placeholder="Search for friend, post or video...."
            className="searchInput"
          />
          <SearchIcon className="searchIcon" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/3.jpeg"
            }
            alt=""
            className="topbarImg"
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 1,ml:2,mr:2,mt:1 }}><PersonIcon/><Link className="linktext1" to={`/profile/${user.username}`}>Profile</Link></Typography>
          <Typography sx={{ p: 1,ml:2,mr:2 }}><SettingsIcon /> Settings</Typography>
          <Typography sx={{ p: 1,ml:2,mr:2,mb:1,ms:2 }}><LogoutIcon/><Link className="linktext1" to="/">Logout</Link></Typography>
        </Popover>
      </div>

      
          
       
    </div>
  );
}
