import { createReducer, on } from "@ngrx/store";
import { Contact } from "../models/contact";
import * as ContactAction from "./contact.actions";

export interface ContactState {
    contact: Contact[],
    searchResultContacts: Contact[]
}

const initialState: ContactState = {
    contact: [],
    searchResultContacts: []
}

export const contactReducer = createReducer(
    initialState,
    // getContactSuccess
    on(ContactAction.getContactSuccess, (state, payload) =>
        ({ ...state, contact: [...payload.contacts], searchResultContacts: [...payload.contacts] })),
    // filterContacts
    on(ContactAction.filterContacts, (state, payload) => {
        const filteredArray = state.contact.filter(contact => contact.name.toLowerCase().includes(payload.searchTerm.toLowerCase()));

        return {
            ...state,
            searchResultContacts: [...filteredArray]
        };
    })
);