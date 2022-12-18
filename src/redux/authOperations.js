import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = axios.post('/users/signup', credentials);
    return data;
  } catch (e) {
    return console.log(e.message);
  }
});
