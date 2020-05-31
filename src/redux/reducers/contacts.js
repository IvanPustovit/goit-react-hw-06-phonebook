import { ADD_CONTACT, DELETE_CONTACT, GET_LOCALSTORAGE } from "../types";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];

    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload);
    case GET_LOCALSTORAGE:
      return !action.payload ? state : action.payload;

    default:
      return state;
  }
};
