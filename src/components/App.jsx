import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import NameForm from './NameForm/NameForm';
import { ContactsList } from './ContactsList/ContactsList';
import css from '../components/App.module.css'

export default function App () {
  
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localData = localStorage.getItem('contacts');
    if (localData) setContacts(JSON.parse(localData));
  }, []);

  useEffect(() => {
  if (contacts.length === 0) {
    localStorage.removeItem('contacts');
  } else {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
  }, [contacts])


  const onAddContact = (name, number) => {
  const contactExists = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
  if (contactExists) {
    alert(`${name} is already in contacts.`);
    return;
  }
  const newContact = { id: nanoid(), name: name, number: number };
  setContacts(prev => [...prev, newContact]);
};

 const onDeleteContact = (id) => {
  setContacts(prev => 
    prev.filter(contact => contact.id !== id))
};
  
  const changeFilter = (event) => {
    setFilter(event.currentTarget.value)
  };

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
     <div className={css.container}>
        <h1>Phonebook</h1>
          <NameForm onAddContact={onAddContact}></NameForm>
        <h2>Contacts</h2>
        {contacts.length > 0 ? (<ContactsList contacts={visibleContacts} value={filter} changeFilter={changeFilter} onDeleteContact={onDeleteContact}></ContactsList>) : (<p>There are no contacts to display.</p>)}
      </div>
  );
};
