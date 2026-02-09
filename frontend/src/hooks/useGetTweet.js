import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTweet } from "../redux/tweetSlice.js";
import { useSelector } from "react-redux";

axios.defaults.withCredentials = true;
const backendUrl = import.meta.env.VITE_BACKEND_TWEET_URL;

const useGetTweet = (id) => {
  const dispatch = useDispatch();
  const { refresh, isActive } = useSelector((store) => store.tweet);

  const followingTweets = async () => {
    try {
      const res = await axios.get(backendUrl + `/getTweet/${id}`);

      dispatch(getTweet(res.data.tweets));
    } catch (error) {
      console.log(error);
    }
  };

  const forYouTweets = async () => {
    try {
      const res = await axios.get(backendUrl + "/getAllTweets");
      dispatch(getTweet(res.data.allTweets));
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isActive) {
      forYouTweets(); //following
    } else {
      followingTweets(); //foryou
    }
  }, [refresh, isActive, id]);
};

export default useGetTweet;
