import { useMemo, memo, useState} from "react";
import { nanoid } from 'nanoid';

import { Notify } from 'notiflix/build/notiflix-notify-aio'

import useForm from "hooks/useForm";

import { useDispatch } from "react-redux";
import { postContact } from "../../redux/contacts/contacts-operations";


import styles from "./phonebook-form.module.css";

const INITIAL_STATE = {
    name: '',
    number: ''
}

const PhonebookForm = () => {
    const dispatch = useDispatch(); 
    const [isAdding, setIsAdding] = useState(false);

    const {state, handleChange, reset } = useForm(INITIAL_STATE)
 
    const contactId = useMemo(() => nanoid(), []);
    const numberId = useMemo(() => nanoid(), []);

    const onAddContact = async (e) => {
        e.preventDefault();
        setIsAdding(true);
        try {
            await dispatch(postContact(state));
            reset();
        } catch (error) {
            Notify.failure("Couldn't add a contact");
        } finally {
            setIsAdding(false);
        }
    };
    
    const {name, number} = state;

    return (
        <form onSubmit={onAddContact} className={styles.form}>
            <div className={styles.phoneWrap}>
                <h3 className={styles.title}>Phonebook</h3>
                <div>
                    <label htmlFor={contactId} className={styles.label}>Name</label>
                    <input className={styles.input} value={name} required name="name" onChange={handleChange} id={contactId} type="text" placeholder="Enter a name" />
                </div>
        </div>
            <div className={styles.contactsWrap}>
                
                <div>
                    <label htmlFor={numberId} className={styles.label}>Number</label>
                    <input className={styles.input} value={number} required name="number" onChange={handleChange} id={numberId} type="tel" placeholder="Enter a number" />
                </div>
            </div>
            <button type="submit" className={styles.button} disabled={isAdding}>{isAdding ? "Adding..." : "Add a contact"}</button>
            <h3 className={styles.title}>Contacts</h3>
        </form>
    )
}

export default memo(PhonebookForm);