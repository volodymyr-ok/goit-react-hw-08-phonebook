import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsAPI,
  postContactAPI,
  deleteContactAPI,
} from 'services/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getContactsAPI();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await postContactAPI(contact);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContactAPI(id);
      return id;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
