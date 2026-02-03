import React from "react";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";

const RightSideBar = () => {
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
        <div className="flex justify-between items-center my-3" >
          <div className="flex items-center">
            <div >
              <Avatar
                src="https://people.com/thmb/kr8ChjA1brcTtA0t6RhRxEs7q_Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(767x357:769x359):format(webp)/pam-the-office-032125-af6e4f0e93df45d0bae7db5e5f279bbb.jpg"
                size="50"
                round={true}
                className="object-cover"
              />
            </div>

            <div className="ml-2">
              <h1 className="font-bold">Kapil </h1>
              <p className="text-sm">@kapil2004</p>
            </div>
          </div>
          <button className="px-3 py-1 bg-black text-white rounded-full ">Follow</button>
        </div>
        
      </div>
      
    </div>
  );
};

export default RightSideBar;
