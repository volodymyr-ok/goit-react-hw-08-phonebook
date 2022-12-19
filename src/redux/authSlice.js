import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, logIn, logOut, register } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, action) {
      console.log('register.pending action.payload', action.payload);
    },
    [register.rejected](state, action) {
      console.log('register.rejected action.payload', action.payload);
    },
    [register.fulfilled](state, action) {
      console.log('register.fulfilled action.payload', action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [logIn.pending](state, action) {
      console.log('logIn.pending action.payload', action.payload);
      // state.user = action.payload.user;
      // state.token = action.payload.token;
      // state.isLoggedIn = true;
    },
    [logIn.rejected](state, action) {
      console.log('logIn.rejected action.payload', action.payload);
    },
    [logIn.fulfilled](state, action) {
      console.log('logIn.fulfilled action.payload', action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [logOut.pending](state) {
      console.log('logOut.pending state', state);
    },
    [logOut.rejected](state, action) {
      console.log('logOut.rejected action.payload', action.payload);
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [fetchCurrentUser.pending](state, action) {
      state.isRefreshing = true;
    },
    [fetchCurrentUser.rejected](state, action) {
      console.log('fetchCurrentUser.rejected action.payload', action.payload);
      state.isRefreshing = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
