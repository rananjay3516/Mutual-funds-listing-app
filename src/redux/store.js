import {configureStore} from '@reduxjs/toolkit';
import usernameReducer from './userData.js';

export const store = configureStore({
  reducer: {
    username: usernameReducer
  }
});