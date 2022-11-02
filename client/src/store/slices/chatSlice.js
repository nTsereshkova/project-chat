import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    isChatsOn: true,
    isSettingsOn: false,
    isContactsOn: false,
  },
  reducers: {
    chatsHandler: state => {
      (state.isChatsOn = true),
        (state.isContactsOn = false),
        (state.isSettingsOn = false);
    },
    settingsHandler: state => {
      (state.isChatsOn = false),
        (state.isContactsOn = false),
        (state.isSettingsOn = true);
    },
    contactsHandler: state => {
      (state.isChatsOn = false),
        (state.isContactsOn = true),
        (state.isSettingsOn = false);
    },
  },
});

export default chatSlice;
