import React from 'react';
import { Footer } from '../../components/Footer';
import { ChatList } from '../../components/ChatList';
import './Main.css';

const Main = ({ isAuth }) => {
  return (
    <div className="main">
      <div className="input">
        <input placeholder="Поиск по чату" />
      </div>
      <ChatList />
      <Footer />
    </div>
  );
};
export default Main;
