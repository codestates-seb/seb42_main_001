import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

import {
  BoardDataProps,
  ILikeList,
} from "../../../util/interfaces/boards.interface";

interface boardListState {
  listData: BoardDataProps[];
  filteredData: BoardDataProps[];
  likeList: ILikeList[];
}

const initialState: boardListState = {
  listData: [],
  filteredData: [],
  likeList: [],
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
      state.likeList = likeList;
      if (
        state.listData.length !== 0 &&
        state.listData.filter((el) => el.boardId === data[0].boardId).length ===
          0
      ) {
        state.listData = [...state.listData, ...result];
      } else if (state.listData.length === 0) {
        state.listData = result;
      }
    },
    boardListFiltered: (state, { payload: data }: PayloadAction<string>) => {
      state.filteredData = state.listData.filter((el) =>
        el.boardTitle.includes(data)
      );
    },
    boardLikeCheck: (
      state,
      {
        payload: { data, boardId },
      }: PayloadAction<{ data: boolean; boardId: number }>
    ) => {
      const filtered = state.listData.filter((el) => el.boardId === boardId)[0];
      filtered.likeCount = filtered.likeCount + 1;
      filtered.like = data;
    },

    boardLikeUncheck: (
      state,
      {
        payload: { data, boardId },
      }: PayloadAction<{ data: boolean; boardId: number }>
    ) => {
      const filtered = state.listData.filter((el) => el.boardId === boardId)[0];
      filtered.likeCount = filtered.likeCount - 1;
      filtered.like = data;
    },
  },
});

export const {
  boardListItemAdd,
  boardListFiltered,
  boardLikeCheck,
  boardLikeUncheck,
} = boardListSlice.actions;

export const selectBoardList = (state: RootState) => state.boardList;

export default boardListSlice.reducer;
