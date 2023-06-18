import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { selectContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Перевіряю, чи контакт уже існує
    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      alert('This contact already exists!');
      return;
    }

    const id = nanoid();

    dispatch(addContact({ id, name, number }));

    // Очищаю форму
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={s.inputName}
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          required
        />
      </label>
      <label>
        Number
        <input
          className={s.inputNumber}
          value={number}
          onChange={e => setNumber(e.target.value)}
          type="tel"
          name="number"
          required
        />
      </label>

      <button type="submit" className={s.buttonEditor}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
