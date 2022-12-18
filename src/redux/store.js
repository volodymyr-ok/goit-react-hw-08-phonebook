import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
// import { authSlice } from './authSlice';

export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});
