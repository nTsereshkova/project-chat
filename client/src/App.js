import React, { useState } from 'react';
import { Header } from './components/Header';
import { Auth } from './pages/Auth';
import { Main } from './pages/Main';

import './App.css';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="app">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      {isAuth ? (
        <Auth isAuth={isAuth} setIsAuth={setIsAuth} />
      ) : (
        <Main isAuth={isAuth} />
      )}
    </div>
  );
};

export default App;
