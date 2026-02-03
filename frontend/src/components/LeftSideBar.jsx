import React from "react";
import { assets } from "../assets/assets.js";
import {
  HiMiniHome,
  HiMiniHashtag,
  HiMiniUser,
} from "react-icons/hi2";
import { IoNotifications } from "react-icons/io5";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { IoLogOut } from "react-icons/io5";

const LeftSideBar = () => {
  return (
    <div className="w-[20%]">
      <div>
        <div>
          <img className="w-12 ml-5" src={assets.x_logo} alt="" />
        </div>
        <div className="my-4">
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <HiMiniHome size="26px" />
            <h1 className="font-semibold text-lg ml-2">Home</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <HiMiniHashtag size="26px" />
            <h1 className="font-semibold text-lg ml-2">Explore</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <IoNotifications size="26px" />
            <h1 className="font-semibold text-lg ml-2">Notifications</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <HiMiniUser size="26px" />
            <h1 className="font-semibold text-lg ml-2">Profile</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <PiBookmarkSimpleFill size="26px" />
            <h1 className="font-semibold text-lg ml-2">Bookmarks</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <IoLogOut size="26px" />
            <h1 className="font-semibold text-lg ml-2">Logout</h1>
          </div>
          <button className="px-4 py-2 border-none text-md bg-[#1D9bf0] w-full rounded-full text-white font-bold cursor-pointer">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
