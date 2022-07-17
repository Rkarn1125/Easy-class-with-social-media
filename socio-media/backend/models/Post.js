import mongoose from "mongoose";

// Defining Schema
const Post = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        max: 500,
      },
      img: {
        type: String,
      },
      likes: {
        type: Array,
        default: [],
      },
    },
    { timestamps: true }
);

// Model 
const Posts = mongoose.model("Post", Post)

export default Posts;