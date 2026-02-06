import { User } from "../models/userSchema.js";

export const bookmark = async (req, res) => {
  try {
    const loggedInUser = req.user;
    //body or user
    const tweetId = req.params.id;

    const user = await User.findById(loggedInUser);

    if (user.bookmarks.includes(tweetId)) {
      await User.findByIdAndUpdate(loggedInUser, {
        $pull: { bookmarks: tweetId },
      });

      return res.json({
        success: true,
        message: "Removed from bookmark.",
      });
    } else {
      await User.findByIdAndUpdate(loggedInUser, {
        $push: { bookmarks: tweetId },
      });
      return res.json({
        success: true,
        message: "Added to bookmark.",
      });
    }
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findById(id).select("-password");

    if (user) {
      return res.json({
        user,
      });
    }
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const getOtherUsers = async (req, res) => {
  try {
    const { id } = req.params;

    const otherUser = await User.find({ _id: { $ne: id } }).select("-password");
    return res.json({
      otherUser,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const follow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id; //loggedin user
    const userId = req.params.id; //whom we are following

    const loggedInUser = await User.findById(loggedInUserId);
    const user = await User.findById(userId);

    if (!user.follower.includes(loggedInUserId)) {
      await user.updateOne({ $push: { follower: loggedInUserId } });
      await loggedInUser.updateOne({ $push: { following: userId } });
    } else {
      return res.json({
        success: false,
        message: "Error while following.",
      });
    }
    return res.json({
      success: true,
      message: `Followed to ${user.name}`,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const unFollow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;

    const loggedInUser = await User.findById(loggedInUserId);
    const user = await User.findById(userId);

    if (loggedInUser.following.includes(userId)) {
      await loggedInUser.updateOne({ $pull: { following: userId } });
      await user.updateOne({ $pull: { follower: loggedInUserId } });
    } else {
      return res.json({
        success: false,
        message: "Error while unfollowing",
      });
    }
    return res.json({
      success: true,
      message: `Unfollowed to ${user.name}`,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};