import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  unset(token) {},
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    console.log('data', data);
    token.set(data.token);
    return data;
  } catch (e) {
    return console.log(e.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    console.log('data', data);
    token.set(data.token);
    return data;
  } catch (e) {
    return console.log(e.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const res = await axios.post('/users/logout');
    console.log('res', res);
    // token.set(data.token);
  } catch (e) {
    return console.log(e.message);
  }
});
