import { createSlice } from "@reduxjs/toolkit";

const state = {
  userId: null,
  name: null,
  email: null,
  stateChange: false,
};


export const authSlice = createSlice({
    name: "auth",
    initialState: state,
    reducers: {
        updateUserProfile: (state, { payload }) => ({
            ...state,
            userId: payload.userId,
            
        })
      
    },
    
})

console.log(authSlice)
