import ContactItem from 'components/ContactItem';
import css from './ContactList.module.css';

const ContactList = ({ contacts, handleContactDelete }) => (
  <ul className={css.contactsList}>
    <ContactItem contacts={contacts} onDeleteContact={handleContactDelete} />
  </ul>
);

export default ContactList;
