import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Chat } from './Chat';

import './ChatList.css';

const chats = ['чат1', 'чат2', 'чат3', 'чат4'];

const ChatList = () => {
  return (
    <div className="chatList">
      {chats.map(item => (
        <Chat key={uuidv4()} name={item} />
      ))}
    </div>
  );
};

export default ChatList;
