import { ADD_CONTACT, DELETE_CONTACT, GET_LOCALSTORAGE } from "../types";

export const addContact = (data) => ({
  type: ADD_CONTACT,
  payload: data,
});

export const deleteContacts = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const getLocalStorage = (arr) => ({
  type: GET_LOCALSTORAGE,
  payload: arr,
});
