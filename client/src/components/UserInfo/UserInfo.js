import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { hideUserInfo } from '../../store/actions/actions';
import './UserInfo.css';

const UserInfo = () => {
  const user = useSelector(state => state.main.user);

  const navigate = useNavigate();
  return (
    <div className="user_info">
      <p> Your profile:</p>
      <p>login: {user.name}</p>
      <p> email: {user.email}</p>
      <p> userId: {user.id}</p>
      <button className="btn" onClick={() => navigate('/')}>
        Go back to main page
      </button>
    </div>
  );
};

export default UserInfo;
