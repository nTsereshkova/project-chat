import React, { useState } from 'react';
import { Header } from './components/Header';
import { Auth } from './pages/Auth';
import { Main } from './pages/Main';

import './App.css';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isChatsOn, setIsChatsOn] = useState(false);
  const [isSettingsOn, setSettingsOn] = useState(false);
  const [isContactsOn, setIsContactsOn] = useState(true);

  return (
    <div className="app">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      {isAuth ? (
        <Auth isAuth={isAuth} setIsAuth={setIsAuth} />
      ) : (
        <Main
          isChatsOn={isChatsOn}
          setIsChatsOn={setIsChatsOn}
          isSettingsOn={isSettingsOn}
          setSettingsOn={setSettingsOn}
          isContactsOn={isContactsOn}
          setIsContactsOn={setIsContactsOn}
        />
      )}
    </div>
  );
};

export default App;
