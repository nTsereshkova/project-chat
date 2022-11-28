import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authSlice from './slices/authSlice';
import mainSlice from './slices/mainSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    main: mainSlice.reducer,
  },
  middleware: [thunk],
});

export default store;
