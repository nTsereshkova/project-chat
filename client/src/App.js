import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Header } from './components/Header';
import { Auth } from './pages/Auth';
import { Main } from './pages/Main';

import './App.css';

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  console.log('auth from app', isAuth);
  return (
    <div className="app">
      <Header />
      {!isAuth ? <Auth /> : <Main />}
    </div>
  );
};

export default App;
