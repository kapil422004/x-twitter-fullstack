import React from "react";
import Avatar from "react-avatar";
import { GoHeart, GoBookmark, GoComment } from "react-icons/go";

const Tweet = () => {
  return (
    <div className="border-b border-gray-200">
      <div>
        <div className="flex p-4">
          <div className="shrink-0">
            <Avatar
              src="https://people.com/thmb/kr8ChjA1brcTtA0t6RhRxEs7q_Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(767x357:769x359):format(webp)/pam-the-office-032125-af6e4f0e93df45d0bae7db5e5f279bbb.jpg"
              size="50"
              round={true}
              className="object-cover"
            />
          </div>

          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">Kapil</h1>
              <p className="text-gray-500 text-sm ml-1">@kapil2004 1m</p>
            </div>
            <div>
              <p>Hello developers lets connect and grow together.</p>
            </div>
            <div className="flex justify-between my-2">
              <div className="flex items-center ">
                <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
                  <GoComment size="22px" />
                </div>

                <p>0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
                  <GoHeart size="22px" />
                </div>

                <p>0</p>
              </div>
              <div className="flex items-center" size="24px">
                <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
                  <GoBookmark size="22px" />
                </div>

                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
