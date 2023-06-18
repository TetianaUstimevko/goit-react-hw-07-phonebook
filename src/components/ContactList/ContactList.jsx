import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import { deleteContact } from 'redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul>
      {filterContacts.map(contact => (
        <ContactItem
          name={contact.name}
          number={contact.number}
          key={contact.id}
          id={contact.id}
          onDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};


export default ContactList;
