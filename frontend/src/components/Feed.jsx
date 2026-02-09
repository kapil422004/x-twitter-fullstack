import React from "react";
import CreatePost from "./CreatePost";
import Tweet from "./Tweet";
import { useSelector } from "react-redux";
import useGetTweet from "../hooks/useGetTweet.js";


const Feed = () => {
  const { tweets } = useSelector((store) => store.tweet);
  const { user } = useSelector((store) => store.user);

  useGetTweet(user?._id);

  return (
    <div className="w-[50%] border border-gray-200">
      <CreatePost />

      {tweets?.map((tweet) => (
        <Tweet key={tweet?._id} tweet={tweet} />
      ))}
    </div>
  );
};

export default Feed;
