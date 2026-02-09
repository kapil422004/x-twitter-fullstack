import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useOtherUsers from "../hooks/useGetOtherUsers.js";
import useGetTweet from "../hooks/useGetTweet.js";
import { useEffect } from "react";

const Home = () => {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate()
useEffect(() => {
  if(!user){
navigate('/login')
  }
},[])


  useOtherUsers(user?._id);
  return (
    <div className="mt-5 flex justify-between w-[80%] mx-auto">
      <LeftSideBar />
      <Outlet />
      <RightSideBar />
    </div>
  );
};

export default Home;
