import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MdExitToApp } from 'react-icons/md';
import { logoutHandler } from '../../store/actions/actions';
import rickLogo from '../../data/rick.png';
import { showUserInfoHandler } from '../../store/actions/actions';
import './Header.css';

const Header = () => {
  const { user, isAuth, token } = useSelector(state => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authHandler = () => {
    // на случай если нажимаем на кнопку находясь на странице персонажа
    navigate('/');
    dispatch(logoutHandler());
  };

  const userInfoHandler = () => {
    // на случай если нажимаем на кнопку находясь на странице персонажа
    navigate('/user');
    dispatch(showUserInfoHandler(token));
  };

  return (
    <div className="header">
      <div className="header_info">
        <p> Rick and Morty's funclub </p>
      </div>
      <div className="header_auth">
        {isAuth && (
          <div className="header_auth_user">
            {user.login}
            <div onClick={userInfoHandler}>
              <img className="logoRick" src={rickLogo} alt="rick" />
            </div>
          </div>
        )}
        {isAuth && <MdExitToApp className="logo" onClick={authHandler} />}
      </div>
    </div>
  );
};

export default Header;
