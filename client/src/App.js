import React, { useEffect, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/Header';
import { Sign } from './pages/Sign';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { PageNotFound } from './pages/PageNotFound';
import { DetailPage } from './pages/DetailPage';
import { ErrorBoundary } from './components/ErrorBoundary';
import { loginCheckStatusHandler } from './store/actions/actions';

import './App.css';
import { UserInfo } from './components/UserInfo';

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginCheckStatusHandler());
  }, [dispatch, isAuth]);

  return (
    <div className="app">
      <Header />
      <ErrorBoundary className="error">
        <Suspense fallback={<h1> ...</h1>}>
          <Routes>
            {isAuth ? (
              <>
                <Route path="/" element={<Main />} />
                <Route path="/user" element={<UserInfo />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/login" element={<Navigate replace to="/" />} />
                <Route path="/sign" element={<Navigate replace to="/" />} />
                <Route path="character/:id" element={<DetailPage />} />
              </>
            ) : (
              <>
                <Route path="/sign" element={<Sign />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate replace to="/sign" />} />
                <Route path="*" element={<PageNotfound />} />
              </>
            )}
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
