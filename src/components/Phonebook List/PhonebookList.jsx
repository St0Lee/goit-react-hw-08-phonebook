import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { selectFilteredContacts } from "../../redux/contacts/contacts-selectors";
import {fetchContacts, removeContact } from "../../redux/contacts/contacts-operations";

import { Notify } from 'notiflix/build/notiflix-notify-aio'

import styles from "./phonebook-list.module.css"



const PhonebookList = () => {
    const { items, isLoading, error } = useSelector(selectFilteredContacts);
    const [isRemoving, setIsRemoving] = useState(false);
    const [isMounted, setIsMounted] = useState(false); 

     const dispatch = useDispatch();

     useEffect(() => {
        setIsMounted(true);
        dispatch(fetchContacts())
          .then(() => setIsMounted(false))
          .catch(() => setIsMounted(true));
      }, [dispatch])

     const onRemoveContact = async (id) => {
        setIsRemoving(true)
        try {
          await dispatch(removeContact(id));
          Notify.success("The contact has been successfully removed")
        } catch (error) {
          Notify.failure("Couldn't remove a contact");
        } finally {
          setIsRemoving(false);
        }
      };

    const elements = items.map (({id, name, number}) => <li key={id}>{name} {number} <button onClick={() => onRemoveContact(id)} type="button" disabled={isRemoving}>{isRemoving ? "Removing..." : "Remove contact"}</button></li>);


    return (
        <div className={styles.wrapper}>
        {isMounted && isLoading && <p>Now Loading...</p>}
        {error && <p>{error}</p>}
        {Boolean(items.length) && <ol className={styles.list}>{elements}</ol>}
        </div>
        
    )

};

export default PhonebookList;