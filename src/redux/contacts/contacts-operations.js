import { createAsyncThunk } from "@reduxjs/toolkit";

import { Notify } from 'notiflix/build/notiflix-notify-aio'

import * as contactsApi from "api/contacts-api";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async(_, thunkAPI) => {
        try{
            const data = await contactsApi.getContacts();
            return data;
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
   );

export const postContact = createAsyncThunk(
    "contacts/addContact",
    async(body, {rejectWithValue}) => {
        try{
            const data = await contactsApi.postContact(body);
            return data;
        }
        catch(error){
            return rejectWithValue(error.message);
        }
    },
    {
        condition: ({name, number}, {getState}) => {
        const {contacts} = getState();
        const normalizedName = name.toLowerCase();
        const normalizedNumber = number.toLowerCase();

        const dublicate = contacts.items.find(item => {
            const normalizedCurrentName = item.name.toLowerCase();
            const normalizedCurrentNumber = item.number.toLowerCase();
            return (normalizedCurrentName === normalizedName || normalizedCurrentNumber === normalizedNumber);
        })

        if(dublicate) {
            Notify.failure(`You've already added ${name} or a number ${number} to your phonebook.`);        
            return false;
        }
        else {
            Notify.success("The contact has been successfully added!")
        }
        }
    }
);

export const removeContact = createAsyncThunk(
    "contact/deleteContact",
    async(id, {rejectWithValue}) => {
        try{
            Notify.success("The contact has been successfully removed!")
            await contactsApi.removeContact(id);
            return id;
        }
        catch(error){
            Notify.failure("Couldn't remove a contact");
            return rejectWithValue(error.message);
        }
    }
);
