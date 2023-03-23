import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

import {
  BoardDataProps,
  ILikeList,
} from "../../../utils/interfaces/boards.interface";

interface boardListState {
  listData: BoardDataProps[];
  filteredData: BoardDataProps[];
}

const initialState: boardListState = {
  listData: [],
  filteredData: [],
};

export const boardListSlice = createSlice({
  name: "boardList",
  initialState,
  reducers: {
    boardListItemAdd: (
      state,
      {
        payload: { data, likeList },
      }: PayloadAction<{ data: BoardDataProps[]; likeList: ILikeList[] }>
    ) => {
      const result = data.map((board: BoardDataProps) => {
        return {
          ...board,
          like: likeList.some(
            (el: { boardId: number; boardTitle: string }) =>
              el.boardId === board.boardId
          ),
        };
      });
      state.listData = [...state.listData, ...result];
    },
    boardListFiltered: (state, { payload: data }: PayloadAction<string>) => {
      state.filteredData = state.listData.filter((el) =>
        el.boardTitle.includes(data)
      );
    },
  },
});

export const { boardListItemAdd, boardListFiltered } = boardListSlice.actions;

export const selectBoardList = (state: RootState) => state.boardList.listData;

export default boardListSlice.reducer;
