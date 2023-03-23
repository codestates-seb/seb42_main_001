import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

import { tag } from '../../../interfaces/tag.interface';

interface tagState {
  tagData: tag | Record<string, never>;
}

const initialState: tagState = {
  tagData: {},
};

export const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    getTagData: (state, { payload: data }: PayloadAction<tag>) => {
      state.tagData = data;
    },
  },
});

export const { getTagData } = tagSlice.actions;

export const selectTag = (state: RootState) => state.tag;

export default tagSlice.reducer;
