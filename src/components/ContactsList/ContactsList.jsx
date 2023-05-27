import { Filter } from './Filter/Filter';
import css from './ContactsList.module.css'

export const ContactsList = ({ contacts, value, changeFilter, onDeleteContact }) => (
<div>
    <Filter value={value} changeFilter={changeFilter} />
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.listItem}>
          {name}: {number}
          <button type="button" onClick={() => onDeleteContact(id)} className={css.listBtn}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);