import express from "express"
import isUserAuthenticated from "../middleware/userAuth.js"
import {createTweet, deleteTweet, getAllTweets, getTweet, likeOrDislike } from "../controllers/tweetController.js"
import { bookmark } from "../controllers/userController.js"

const tweetRouter = express.Router()

tweetRouter.post("/createtweet", isUserAuthenticated, createTweet)
tweetRouter.delete("/delete/:id", isUserAuthenticated, deleteTweet)
tweetRouter.put("/like/:id", isUserAuthenticated, likeOrDislike)
tweetRouter.put("/bookmark/:id", isUserAuthenticated, bookmark)
tweetRouter.get("/getTweet/:id", isUserAuthenticated, getTweet)
tweetRouter.get("/getAllTweets", isUserAuthenticated, getAllTweets)


export default tweetRouter