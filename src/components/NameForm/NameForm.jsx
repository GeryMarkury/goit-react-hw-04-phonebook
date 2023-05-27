import { Component } from 'react';
import css from './NameForm.module.css'

export class NameForm extends Component {

    state = {
        name: '',
        number: '',
    };
    
    handleChange = event => {
        this.setState({ [event.currentTarget.name]: event.currentTarget.value })
    };

    handleOnClick = () => {
        this.props.onAddContact(this.state.name, this.state.number);
        this.setState({ name: '', number: '', });
    };

    render() {
        const { name, number } = this.state;

        return (
            <form className={css.form}>
                <label>Name: <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                /></label>
                <label>Number: <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                /></label>
                <button type="button" onClick={this.handleOnClick} className={css.formBtn}>Add contact</button>
                </form>
                )
    }
}
