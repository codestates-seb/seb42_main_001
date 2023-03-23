import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDrinks, ILikes } from "../../../utils/interfaces/drinks.inerface";

interface IDrinksListState {
  isLoading: boolean;
  drinksData: IDrinks[];
  likesData: ILikes[];
  searchTag: number;
  likes: boolean;
}

const initialState: IDrinksListState = {
  isLoading: true,
  drinksData: [],
  likesData: [],
  searchTag: 0,
  likes: false,
};

const drinksListSlice = createSlice({
  name: "drinksList",
  initialState,
  reducers: {
    setDrinksData: (state, action) => {
      state.drinksData = action.payload;
    },
    setLikesData: (state, action) => {
      state.likesData = action.payload;
    },
    setIsLoading: (state) => {
      state.isLoading = false;
    },
    setSearchTag: (state, action: PayloadAction<number>) => {
      state.searchTag = action.payload;
    },
    setLikes: (state) => {
      state.isLoading = true;
    },
  },
});

export const {
  setDrinksData,
  setLikesData,
  setIsLoading,
  setSearchTag,
  setLikes,
} = drinksListSlice.actions;
export default drinksListSlice.reducer;
