import axios from "axios";
import React, { useState } from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getIsActive, getRefresh } from "../redux/tweetSlice";


axios.defaults.withCredentials = true;
const backendUrl = import.meta.env.VITE_BACKEND_TWEET_URL;

const CreatePost = () => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const {isActive} = useSelector((store) => store.tweet)

  const submitHandler = async () => {
    try {
      const res = await axios.post(backendUrl + "/createtweet", {
        description,
      });
      dispatch(getRefresh());
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
    setDescription("");
  };

  const forYouHandler = () =>{
    dispatch(getIsActive(true))
  }

    const followingHandler = () =>{
    dispatch(getIsActive(false))
  }


  return (
    <div className="w-full ">
      <div>
        <div className="flex items-center justify-evenly border-b border-gray-200">
          <div onClick={forYouHandler} className= {`${isActive ? "border-b-4  border-[#1D9BF0]" : 'border-b-4 border-transparent' }  cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`}>
            <h1 className="font-semibold text-gray-600 text-lg">For you</h1>
          </div>
          <div onClick={followingHandler} className={`${!isActive ? "border-b-4  border-[#1D9BF0]" : 'border-b-4 border-transparent' }  cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`}>
            <h1
              className="font-semibold text-gray-600 text-lg"
            >
              Following
            </h1>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center  p-4">
          <div>
            <Avatar
              src="https://people.com/thmb/kr8ChjA1brcTtA0t6RhRxEs7q_Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(767x357:769x359):format(webp)/pam-the-office-032125-af6e4f0e93df45d0bae7db5e5f279bbb.jpg"
              size="50"
              round={true}
              className="object-cover"
            />
          </div>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full outline-none border-none text-lg ml-2"
            type="text"
            placeholder="What is happening!"
          />
        </div>
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <div>
            <CiImageOn size="24px" />
          </div>
          <button
            onClick={submitHandler}
            className="bg-[#1D9BF0] px-4 py-1 text-md text-white border-none rounded-full cursor-pointer font-bold"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
