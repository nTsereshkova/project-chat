import React, { useState } from 'react';
import './Auth.css';

const Auth = ({ isAuth, setIsAuth }) => {
  const [isDisable, setIsDisable] = useState(false);

  const authHandler = () => {
    setIsAuth(!isAuth);
  };
  return (
    <div className="auth">
      <form className="auth_form">
        <input placeholder="login" />
        <input placeholder="password" />
        <button
          onClick={authHandler}
          disabled={isDisable}
          type="button"
          className="auth_btn"
        >
          Sign in
        </button>
        <button
          onClick={authHandler}
          disabled={isDisable}
          type="button"
          className="auth_btn"
        >
          Log in
        </button>
      </form>
    </div>
  );
};
export default Auth;
