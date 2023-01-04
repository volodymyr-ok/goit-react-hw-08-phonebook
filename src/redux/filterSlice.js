import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '', theme: 'dark' },
  reducers: {
    changeFilter(state, action) {
      state.value = action.payload;
    },
    changeTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { changeFilter, changeTheme } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
