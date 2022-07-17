import express from "express";
import connectDB from "./db/connectdb.js";

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/Post.js";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';
import router from "./routes/users.js";

const app = express();
app.use(cors());
const port = process.env.PORT || "8000";

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
// Database Connection
connectDB(DATABASE_URL);

// JSON middleware
app.use(express.json());

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
// Load Routes

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/images",express.static(path.join(__dirname,"public/images")))


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
