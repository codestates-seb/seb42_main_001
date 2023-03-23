import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/auth/authSlice';
import boardListReducer from '../slice/board/boardListSlice';
import drinkslistReducer from '../slice/drinks/drinksListSlice';
import drinksTagsReducer from '../slice/drinks/drinksTagsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    boardList: boardListReducer,
    drinkslist: drinkslistReducer,
    drinksTags: drinksTagsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
