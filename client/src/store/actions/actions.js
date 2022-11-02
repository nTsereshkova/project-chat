import authSlice from '../slices/authSlice';
import chatSlice from '../slices/chatSlice';

export const { loginHandler, logoutHandler } = authSlice.actions;

export const { chatsHandler, settingsHandler, contactsHandler } = chatSlice.actions;
