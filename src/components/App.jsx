import { Component } from 'react';
import { nanoid } from 'nanoid'
import { NameForm } from './NameForm/NameForm';
import { ContactsList } from './ContactsList/ContactsList';
import css from '../components/App.module.css'

export class App extends Component {
  
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
		if (localData) this.setState({ contacts: JSON.parse(localData) })
  };

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  };

onAddContact = (name, number) => {
  const contactExists = this.state.contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
  if (contactExists) {
    alert(`${name} is already in contacts.`);
    return;
  }
  const newContact = { id: nanoid(), name: name, number: number };
  this.setState(prevState => ({
    contacts: [...prevState.contacts, newContact],
    filter: '',
  }));
};

  onDeleteContact = (id) => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== id)
  }));
};
  
  changeFilter = (event) => {
    this.setState({filter: event.currentTarget.value})
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
     <div className={css.container}>
        <h1>Phonebook</h1>
          <NameForm onAddContact={this.onAddContact}></NameForm>
        <h2>Contacts</h2>
        {this.state.contacts.length > 0 ? (<ContactsList contacts={visibleContacts} value={this.state.filter} changeFilter={this.changeFilter} onDeleteContact={this.onDeleteContact}></ContactsList>) : (<p>There are no contacts to display.</p>)}
      </div>
  );
  } 
};
