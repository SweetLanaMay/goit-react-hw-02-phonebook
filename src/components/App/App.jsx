import { Component } from 'react';
import PhoneBook from 'components/PhoneBook';
import Filter from 'components/Filter';

import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  render() {
    return (
      <div className={css.container}>
        <h1 className={css.phoneBookTitle}>PhoneBook</h1>
        <PhoneBook />
        <h2 className={css.contactsTitle}>Contacts</h2>
        <Filter />
        
      </div>
    );
  }
}
