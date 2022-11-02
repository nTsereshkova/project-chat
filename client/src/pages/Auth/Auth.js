import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginHandler } from '../../store/actions/actions';
import './Auth.css';

const Auth = () => {
  const [isDisable, setIsDisable] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="auth">
      <form className="auth_form">
        <input placeholder="login" />
        <input placeholder="password" />
        <button
          onClick={() => dispatch(loginHandler())}
          disabled={isDisable}
          type="button"
          className="auth_btn"
        >
          Sign in
        </button>
        <button
          onClick={() => dispatch(loginHandler())}
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
