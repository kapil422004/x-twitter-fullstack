import { createSlice } from "@reduxjs/toolkit";

const tweeetSlice = createSlice({
    name:"tweet",
    initialState:{
        tweets:null,
        refresh:false,
        isActive:true
    },
    reducers:{
        getTweet:((state, action) => {state.tweets = action.payload}),
        getRefresh:((state) => {state.refresh = !state.refresh}),
        getIsActive:((state, action) => {state.isActive = action.payload})
    }
})

export const {getTweet, getRefresh, getIsActive} = tweeetSlice.actions
export default tweeetSlice.reducer