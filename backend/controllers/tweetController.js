import { Tweet } from "../models/tweetSchema.js";
import { User } from "../models/userSchema.js";

export const createTweet = async (req, res) => {
  try {
    const { description } = req.body;
    const userId = req.user;

    if (!description) {
      return res.json({
        success: false,
        message: "Field is empty.",
      });
    }
    const user = await User.findById(userId)
    await Tweet.create({
      description,
      userId: userId,
      userDetails:user
    });

    return res.json({
      success: true,
      message: "Tweet created succesfully.",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;
    await Tweet.findByIdAndDelete(id);
    return res.json({
      success: true,
      message: "Tweet deleted succesfully.",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const likeOrDislike = async (req, res) => {
  const loggedInUserId = req.user;
  const tweetId = req.params.id;

  const tweet = await Tweet.findById(tweetId);

  if (tweet.like.includes(loggedInUserId)) {
    await Tweet.findByIdAndUpdate(tweetId, { $pull: { like: loggedInUserId } });
    return res.json({
      success: true,
      message: "Disliked",
    });
  } else {
    await Tweet.findByIdAndUpdate(tweetId, { $push: { like: loggedInUserId } });
    return res.json({
      success: true,
      message: "Liked",
    });
  }
};

//for following section
export const getTweet = async (req, res) => {
  try {
    //loggedin user tweet and following user tweet
    const id = req.params.id; //loggedin user
    const loggedInUser = await User.findById(id);
    const loggedinUserTweet = await Tweet.find({ userId: id });

    const followingUserTweet = await Promise.all(
      loggedInUser.following.map((otherUsersId) => {
        return Tweet.find({ userId: otherUsersId });
      }),
    );
    return res.json({
      tweets: loggedinUserTweet.concat(...followingUserTweet),
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//for for you section all tweets
export const getAllTweets = async (req, res) => {
  try {
    const allTweets = await Tweet.find();

    return res.json({
      allTweets,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error in getting all tweets.",
    });
  }
};
