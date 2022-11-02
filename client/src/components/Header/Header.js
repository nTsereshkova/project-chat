import React from 'react';
import { BsChatDots } from 'react-icons/bs';
import { MdExitToApp } from 'react-icons/md';
import './Header.css';

const Header = ({ isAuth, setIsAuth }) => {
  return (
    <div className="header">
      <div className="header_logo">
        <p> Slack Chat </p>
        <BsChatDots className="logo" />
      </div>
      <div className="header_auth">
        {!isAuth && 'Привет, юзер'}
        {!isAuth && (
          <MdExitToApp className="logo" onClick={() => setIsAuth(!isAuth)} />
        )}
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
