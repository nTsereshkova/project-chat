import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authentification',
  initialState: {
    isAuth: false,
  },
  reducers: {
    loginHandler: state => {
      state.isAuth = true;
    },
    logoutHandler: state => {
      state.isAuth = false;
    },
  },
});

export default authSlice;
