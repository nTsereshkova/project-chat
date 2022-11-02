import React from 'react';
import { MdOutlineChat } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { IoIosContact } from 'react-icons/io';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_description">
        <MdOutlineChat className="footer_description_img" />
        <p> Чаты </p>
      </div>
      <div className="footer_description">
        <FiSettings className="footer_description_img" />
        <p> Настройки </p>
      </div>
      <div className="footer_description">
        <IoIosContact className="footer_description_img" />
        <p> Контакты </p>
      </div>
    </div>
  );
};

export default Footer;

// <HiOutlineChat />;
