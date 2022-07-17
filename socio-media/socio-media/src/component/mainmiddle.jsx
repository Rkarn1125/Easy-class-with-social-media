import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../style/post.css";
import axios from "axios";
import { useState, useEffect } from "react";


export default function Post({ post }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const { user: currentuserId } = useContext(AuthContext);
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    setIsLiked(post.likes.includes(currentuserId._id));
  }, [currentuserId._id, post.likes]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchPosts();
  }, [post.userId]);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentuserId._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div
            className="postTopRight"
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            sx={{ mr: 5 }}
          >
            <Typography sx={{ p: 1 }}>
              <SystemUpdateAltIcon /> Update
            </Typography>
            <Typography sx={{ p: 1 }}>
              <DeleteOutlineIcon /> Delete
            </Typography>
          </Popover>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
