import css from './ContactItem.module.css';

const ContactItem = ({ contacts, onDeleteContact }) => (
  <>
    {contacts.map(contact => (
      <li key={contact.id} className={css.contactsItem}>
        {contact.name}: {contact.number}
        <button
          className={css.deleteBtn}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </>
);
export default ContactItem;
