import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
// import { deleteContact } from 'redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {
  // const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // const handleDeleteContact = contactId => {
  //   dispatch(deleteContact(contactId));
  // };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filterContacts.map((contact) => (
        <ContactItem
          name={contact.name}
          number={contact.number}
          key={contact.id}
          id={contact.id}
        
        />
      ))}
    </ul>
  );
};

export default ContactList;
