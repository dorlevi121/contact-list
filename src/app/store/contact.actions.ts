import { Action, createAction, props } from "@ngrx/store";
import { Contact } from "../models/contact";

export const FILTER_CONTACTS = "FILTER_CONTACTS";
export const GET_CONTACTS = "GET_CONTACTS";
export const GET_CONTACTS_SUCCESS = "GET_CONTACTS_SUCCESS";


export const filterContacts = createAction(FILTER_CONTACTS, props<{ searchTerm: string }>());

export const getContacts = createAction(GET_CONTACTS);

export const getContactSuccess = createAction(GET_CONTACTS_SUCCESS, props<{ contacts: Contact[] }>());




