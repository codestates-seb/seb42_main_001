import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/auth/authSlice";
import drinkslistReducer from "../slice/drinks/drinksListSlice";
import drinksTagsReducer from "../slice/drinks/drinksTagsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    drinkslist: drinkslistReducer,
    drinksTags: drinksTagsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
