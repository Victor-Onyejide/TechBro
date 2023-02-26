import { createSlice } from "@reduxjs/toolkit";

const initalAuthState = {
  isUserAuthenticated: false,
  // userName: null,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initalAuthState,
  reducers: {
    login: (state, action) => {
      state.isUserAuthenticated = true;
      state.userName = action.payload;
    },
    logout: (state) => {
      state.isUserAuthenticated = false;
      state.userName = null;
    },
  }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;