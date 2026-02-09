import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTweet } from "../redux/tweetSlice";
import { getProfile } from "../redux/userSlice";
const backendUrl = import.meta.env.VITE_BACKEND_USER_URL;

axios.defaults.withCredentials = true;

const useGetProfile = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMyProfile = async () => {
      //made this function to use async and await
      try {
        const res = await axios.get(backendUrl + `/profile/${id}`);
        dispatch(getProfile(res.data.user));
        // console.log(res)
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyProfile();
  }, [id, dispatch]);
};

export default useGetProfile;
//because it should not be called every time home page relode thats why it is in useEffect.
