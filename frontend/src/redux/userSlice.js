import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    otherUser: null,
    profile: null,
  },
  reducers: {
    //we perform action and put payload in user which is in state
    getUsers: (state, action) => {
      state.user = action.payload;
    },
    getOtherUser: (state, action) => {
      state.otherUser = action.payload;
    },
    getProfile: (state, action) => {
      state.profile = action.payload;
    },

    followingUpdate: (state, action) => {
      if (state.user.following.includes(action.payload)) {
        state.user.following = state.user.following.filter((itemId) => {
          return itemId !== action.payload;
        });
      } else {
        state.user.following.push(action.payload);
      }
    },
  },
});

export const { getUsers, getOtherUser, getProfile, followingUpdate } = userSlice.actions;
export default userSlice.reducer;
