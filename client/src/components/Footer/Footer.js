import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdOutlineChat } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { IoIosContact } from 'react-icons/io';
import {
  chatsHandler,
  settingsHandler,
  contactsHandler,
} from '../../store/actions/actions';
import './Footer.css';

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <div className="footer">
      <div className="footer_description">
        <MdOutlineChat
          className="footer_description_img"
          onClick={() => dispatch(chatsHandler())}
        />
        <p> Чаты </p>
      </div>
      <div className="footer_description">
        <FiSettings
          className="footer_description_img"
          onClick={() => dispatch(settingsHandler())}
        />
        <p> Настройки </p>
      </div>
      <div className="footer_description">
        <IoIosContact
          className="footer_description_img"
          onClick={() => dispatch(contactsHandler())}
        />
        <p> Контакты </p>
      </div>
    </div>
  );
};

export default Footer;

// <HiOutlineChat />;

// isChatsOn,
// setIsChatsOn,
// isSettingsOn,
// setSettingsOn,
// isContactsOn,
// setIsContactsOn,
