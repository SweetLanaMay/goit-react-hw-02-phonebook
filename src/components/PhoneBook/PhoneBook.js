import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './PhoneBook.module.css';

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
    );

    if (existingContact) {
      alert(
        `Contact with the name ${this.state.name} already exists! Please enter a different name.`
      );
    } else {
      const newContact = {
        id: nanoid(),
        name: this.state.name,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
      }));
    }
  };

  render() {
    return (
      <form className={css.phoneBookForm} onSubmit={this.handleFormSubmit}>
        <label className={css.formName}>
          Name
          <input
            value={this.state.name}
            onChange={this.handleNameChange}
            className={css.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.formName}>
          Number
          <input
            value={this.state.number}
            onChange={this.handleNumberChange}
            className={css.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.formButton}>Add contact</button>
      </form>
    );
  }
}
export default PhoneBook;
