import React, { useState } from 'react';
import { MdOutlineChat } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { IoIosContact } from 'react-icons/io';

import './Footer.css';

const Footer = ({
  isChatsOn,
  setIsChatsOn,
  isSettingsOn,
  setSettingsOn,
  isContactsOn,
  setIsContactsOn,
}) => {
  return (
    <div className="footer">
      <div className="footer_description">
        <MdOutlineChat
          className="footer_description_img"
          onClick={() => {
            setIsChatsOn(true);
            setIsContactsOn(false);
            setSettingsOn(false);
          }}
        />
        <p> Чаты </p>
      </div>
      <div className="footer_description">
        <FiSettings
          className="footer_description_img"
          onClick={() => {
            setIsChatsOn(false);
            setIsContactsOn(false);
            setSettingsOn(true);
          }}
        />
        <p> Настройки </p>
      </div>
      <div className="footer_description">
        <IoIosContact
          className="footer_description_img"
          onClick={() => {
            setIsChatsOn(false);
            setIsContactsOn(true);
            setSettingsOn(false);
          }}
        />
        <p> Контакты </p>
      </div>
    </div>
  );
};

export default Footer;

// <HiOutlineChat />;
