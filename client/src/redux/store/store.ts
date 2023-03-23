import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/auth/authSlice';
import tagReducer from '../slice/tag/tagSlice';

export const store = configureStore({
  reducer: { auth: authReducer, tag: tagReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
