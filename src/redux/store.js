import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// console.log(storage.getItem('persist:theme'));

const middleware = getDefaultMiddleware => {
  return getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });
};

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistThemeConfig = {
  key: 'theme',
  storage,
  whitelist: ['theme'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: persistReducer(persistThemeConfig, filterReducer),
    auth: persistReducer(persistConfig, authReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
