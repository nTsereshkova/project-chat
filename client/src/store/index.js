import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authSlice from './slices/authSlice';
import chatSlice from './slices/chatSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    chat: chatSlice.reducer,
  },
  middleware: [thunk],
});

export default store;
