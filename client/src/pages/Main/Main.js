import React from 'react';
import { Footer } from '../../components/Footer';
import { ChatList } from '../../components/ChatList';
import { Settings } from '../../components/Settings';
import { Contacts } from '../../components/Contacts';
import './Main.css';

const Main = ({
  isChatsOn,
  setIsChatsOn,
  isSettingsOn,
  setSettingsOn,
  isContactsOn,
  setIsContactsOn,
}) => {
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
      <Footer
        isChatsOn={isChatsOn}
        setIsChatsOn={setIsChatsOn}
        isSettingsOn={isSettingsOn}
        setSettingsOn={setSettingsOn}
        isContactsOn={isContactsOn}
        setIsContactsOn={setIsContactsOn}
      />
    </div>
  );
};
export default Main;
