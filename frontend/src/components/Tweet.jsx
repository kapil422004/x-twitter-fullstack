import Avatar from "react-avatar";
import { GoHeart, GoBookmark, GoComment, GoHeartFill } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";

import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getRefresh } from "../redux/tweetSlice";
import { useSelector } from "react-redux";
import assets from "../assets/assets";

const backendUrl = import.meta.env.VITE_BACKEND_TWEET_URL;

axios.defaults.withCredentials = true;

const Tweet = ({ tweet }) => {
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const isLiked = tweet?.like?.includes(user?._id);

  const likeHandler = async (id) => {
    try {
      const res = await axios.put(backendUrl + `/like/${id}`);
      dispatch(getRefresh());
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const res = await axios.delete(backendUrl + `/delete/${id}`);
      dispatch(getRefresh());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-b border-gray-200">
      <div>
        <div className="flex p-4">
          <div className="shrink-0">
            <Avatar
              src={assets.profile_pic}
              size="50"
              round={true}
              className="object-cover"
            />
          </div>

          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">{tweet?.userDetails[0]?.name}</h1>
              <p className="text-gray-500 text-sm ml-1">
                {`@${tweet?.userDetails[0]?.username} 1m`}{" "}
              </p>
            </div>
            <div>
              <p>{tweet?.description}</p>
            </div>
            <div className="flex justify-between my-2">
              <div className="flex items-center ">
                <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
                  <GoComment size="22px" />
                </div>

                <p>{0}</p>
              </div>
              <div
                onClick={() => likeHandler(tweet?._id)}
                className="flex items-center"
              >
                <div className="p-2 hover:bg-red-200 rounded-full cursor-pointer">
                  {isLiked ? (
                    <GoHeartFill size="22px" className="text-red-500" />
                  ) : (
                    <GoHeart size="22px" />
                  )}
                </div>

                <p>{tweet?.like?.length}</p>
              </div>
              <div className="flex items-center" size="24px">
                <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
                  <GoBookmark size="22px" />
                </div>

                <p>0</p>
              </div>
              {user?._id === tweet?.userId && (
                <div
                  onClick={() => deleteHandler(tweet?._id)}
                  className="p-2 hover:bg-red-400 rounded-full cursor-pointer"
                >
                  <MdOutlineDelete size="22px" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
