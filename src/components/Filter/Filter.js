import React, { Component } from 'react';
import ContactList from '../ContactList';
import css from './Filter.module.css';

class Filter extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleContactDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };


  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <>
        <label className={css.filterLabel}>
          Find contacts by name
          <input
            type="text"
            value={this.state.filter}
            onChange={this.handleFilterChange}
            placeholder="Search contacts"
            className={css.filterInput}
          />
        </label>
        <ContactList contacts={filteredContacts} handleContactDelete={this.handleContactDelete} />
      </>
    );
  }
}

export default Filter;
