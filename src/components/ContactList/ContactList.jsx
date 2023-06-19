import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filterContacts.map((contact) => (
        <ContactItem
          name={contact.name}
          number={contact.phone}
          key={contact.id}
          id={contact.id}
        
        />
      ))}
    </ul>
  );
};

export default ContactList;
