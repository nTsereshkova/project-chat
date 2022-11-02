import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsChatDots } from 'react-icons/bs';
import { MdExitToApp } from 'react-icons/md';
import { logoutHandler } from '../../store/actions/actions';
import './Header.css';

const Header = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();
  const authHandler = () => {
    dispatch(logoutHandler());
    console.log('clicked exit ', isAuth);
  };

  return (
    <div className="header">
      <div className="header_logo">
        <p> Slack Chat </p>
        <BsChatDots className="logo" />
      </div>
      <div className="header_auth">
        {isAuth && 'Привет, юзер'}
        {isAuth && <MdExitToApp className="logo" onClick={authHandler} />}
      </div>
    </div>
  );
};

export default Header;

{
  /* <button className="btn" onClick={() => setIsAuth(!isAuth)}>
  Выйти
</button>; */
}
