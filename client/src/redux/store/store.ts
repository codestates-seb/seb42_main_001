import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/auth/authSlice';
import boardListReducer from '../slice/board/boardListSlice';

export const store = configureStore({
  reducer: { auth: authReducer, boardList: boardListReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
