import express from "express";
import "dotenv/config";
import dbconnect from "./config/dbconnect.js";
import cookieParser from "cookie-parser";
import router from "./routes/authRoutes.js";
import tweetRouter from "./routes/tweetRoutes.js";
const app = express();

const port = process.env.PORT || 8080;

dbconnect();

//middleware
app.use(express.json());
app.use(cookieParser());

//api
app.use("/api/v1/user", router);
app.use("/api/v1/tweet", tweetRouter)


app.listen(port, () => {
  console.log(`server is live at ${port}`);
});
