import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Header } from './components/Header';
import { Auth } from './pages/Auth';
import { Main } from './pages/Main';
import { PageNotfound } from './pages/PageNotFound';

import './App.css';

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  console.log('auth from app', isAuth);
  // перекинуть потогм в редакс
  const [isError, setIsError] = useState(true);
  return (
    <div className="app">
      <Header />
      {!isAuth ? <Auth /> : <Main />}
      {isError && <PageNotfound />}
    </div>
  );
};

export default App;

// подключить роутер
// isError- Должно быть для errorpage
