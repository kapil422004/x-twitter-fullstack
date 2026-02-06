import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

const Profile = () => {
  return (
    <div className="w-[50%] border-l border-r border-gray-200">
      <div>
        <div className=" flex items-center py-2">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <IoIosArrowRoundBack size="24px" />
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">Kapil</h1>
            <p className="text-gray-500 text-sm">10 post</p>
          </div>
        </div>
        <img
          src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360"
          alt=""
        />

        <div className="absolute top-50 ml-2 border-4 border-white rounded-full">
          <Avatar
            src="https://people.com/thmb/kr8ChjA1brcTtA0t6RhRxEs7q_Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(767x357:769x359):format(webp)/pam-the-office-032125-af6e4f0e93df45d0bae7db5e5f279bbb.jpg"
            size="120"
            round={true}
            className="object-cover"
          />
        </div>

        <div className="text-right m-4">
          <button className="px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400 cursor-pointer">
            Edit Profile
          </button>
        </div>

        <div className="m-4">
          <h1 className="font-bold text-xl">Kapil</h1>
          <p>@kapil2004</p>
        </div>

        <div className="m-4 text-sm">
          <p>
            Exploring the web's endless possiblities with MERN stack🚀 | Problem
            solver by day, coder by night🌙 | Join me on this coding
            journy!👨‍💻{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
