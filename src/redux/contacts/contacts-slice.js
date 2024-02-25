import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, postContact, removeContact  } from "./contacts-operations";

import {pending, rejected} from "../../shared/functions/redux"

const initialState = {
    items: [],
    isLoading: false,
    error: null,
  }


const contactsSlice = createSlice({
    name: "contacts",
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, pending)
            .addCase(fetchContacts.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.items = payload;
            })
            .addCase(fetchContacts.rejected, rejected)
            
            .addCase(postContact.pending, pending)
            .addCase(postContact.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.items.push(payload);
            })
            .addCase(postContact.rejected, rejected)

            .addCase(removeContact.pending, pending)
            .addCase(removeContact.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.items = state.items.filter(({id}) => id !== payload);
            })
            .addCase(removeContact.rejected, rejected)
        } 
    });

export default contactsSlice.reducer;
