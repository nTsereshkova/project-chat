import React from 'react';
import { useSelector } from 'react-redux';
import { Footer } from '../../components/Footer';
import { ChatList } from '../../components/ChatList';
import { Settings } from '../../components/Settings';
import { Contacts } from '../../components/Contacts';
import './Main.css';

const Main = () => {
  const { isChatsOn, isSettingsOn, isContactsOn } = useSelector(state => state.chat);

  return (
    <div className="main">
      {isChatsOn && (
        <>
          <div className="input">
            <input placeholder="Поиск по чату" />
          </div>
          <ChatList />
        </>
      )}
      {isSettingsOn && <Settings />}
      {isContactsOn && <Contacts />}
      <Footer />
    </div>
  );
};
export default Main;
