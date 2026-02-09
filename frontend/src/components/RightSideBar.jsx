import React from "react";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

const RightSideBar = () => {
  const { otherUser } = useSelector((store) => store.user);

  return (
    <div>
      <div className=" flex p-2 items-center bg-gray-100 rounded-full outline-none w-full">
        <CiSearch size="20px" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none px-1"
        />
      </div>

      <div className="px-4 bg-gray-100 rounded-2xl my-4 p-5">
        <h1 className="font-bold text-lg">Who to follow?</h1>

        {otherUser?.map((user) => {
          return (
            <div
              key={user?._id}
              className="flex justify-between items-center my-3"
            >
              <div className="flex items-center">
                <div>
                  <Avatar
                    src={assets.profile_pic}
                    size="50"
                    round={true}
                    className="object-cover"
                  />
                </div>

                <div className="ml-2">
                  <h1 className="font-bold">{user?.name} </h1>
                  <p className="text-sm">{`@${user?.username}`}</p>
                </div>
              </div>
              <Link to={`/profile/${user?._id}`}>
                <button className="px-3 py-1 bg-black text-white rounded-full cursor-pointer">
                  Profile
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightSideBar;
