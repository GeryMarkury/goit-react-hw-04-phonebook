import { useState } from 'react';
import css from './NameForm.module.css'

export default function NameForm ({onAddContact}) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');


    const handleOnClick = () => {
        onAddContact(name, number);
        setName('');
        setNumber('');
    };

        return (
            <form className={css.form}>
                <label>Name: <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={event => setName(event.currentTarget.value)}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                /></label>
                <label>Number: <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={event => setNumber(event.currentTarget.value)}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                /></label>
                <button type="button" onClick={handleOnClick} className={css.formBtn}>Add contact</button>
                </form>
                )
    }
