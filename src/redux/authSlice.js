import { createSlice } from '@reduxjs/toolkit';
import { register } from './authOperations';

console.log('hello');
console.log(register);

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: '',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {},
  },
});
