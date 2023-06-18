import React from 'react';
import { useSelector } from 'react-redux';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'redux/store';
import s from './App.module.css';
import { selectContacts } from 'redux/selectors';

const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 18,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm />

        <h2 className={s.titleContacts}>Contacts</h2>
        <div className={s.allContacts}>All contacts: {contacts.length}</div>

        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Notification message="Contact list is empty" />
        )}
      </div>
    </PersistGate>
  );
};

export default App;
