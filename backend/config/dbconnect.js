import mongoose from "mongoose";
import "dotenv/config";

const URL = process.env.DB_URL;

const dbconnect = async () => {
  await mongoose
    .connect(URL)
    .then(() => console.log("DB is connected"))
    .catch((e) => console.log(e));
};

export default dbconnect;
