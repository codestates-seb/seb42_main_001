import { createSlice } from "@reduxjs/toolkit";
import { ITags } from "../../../utils/interfaces/drinks.inerface";

interface IDrinksTagsState {
  tagData: ITags[];
}

const initialState: IDrinksTagsState = {
  tagData: [],
};

const drinksTagsSlice = createSlice({
  name: "drinksTags",
  initialState,
  reducers: {
    setTagData: (state, action) => {
      state.tagData = action.payload;
    },
  },
});

export const { setTagData } = drinksTagsSlice.actions;
export default drinksTagsSlice.reducer;
