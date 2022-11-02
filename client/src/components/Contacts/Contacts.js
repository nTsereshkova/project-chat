import React from 'react';
import { Contact } from './Contact';
import './Contacts.css';

const Contacts = () => {
  const contacts = [
    { name: 'вася', id: 1 },
    { name: 'петя', id: 2 },
    { name: 'света', id: 3 },
  ];
  return (
    <div className="contacts">
      Контакты :
      <div>
        {contacts ? (
          contacts.map(item => <Contact name={item.name} key={item.id} />)
        ) : (
          <p> Контактов пока нет</p>
        )}
      </div>
      <button>добавить контакт / или иконка плюса </button>
    </div>
  );
};

export default Contacts;
