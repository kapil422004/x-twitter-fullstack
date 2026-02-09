import express from "express";
import "dotenv/config";
import dbconnect from "./config/dbconnect.js";
import cookieParser from "cookie-parser";
import router from "./routes/authRoutes.js";
import tweetRouter from "./routes/tweetRoutes.js";
import cors from "cors"
const app = express();

const port = process.env.PORT || 8080;

dbconnect();

//middleware
const corsOptions = {
  origin: ["http://localhost:5173",
  "https://x-twitter-fullstack.vercel.app",
  "https://x-twitter-fullstack-git-main-kapil-ishwarkars-projects.vercel.app",
  "https://x-twitter-fullstack-7i18z7r19-kapil-ishwarkars-projects.vercel.app"],
  credentials: true
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(cookieParser());


//api
app.use("/api/v1/user", router);
app.use("/api/v1/tweet", tweetRouter)


app.listen(port, () => {
  console.log(`server is live at ${port}`);
});
