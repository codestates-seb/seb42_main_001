import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

import {
  IBoardData,
  ILikeList,
} from '../../../util/interfaces/boards.interface';

interface boardListState {
  listData: IBoardData[];
  filteredData: IBoardData[];
  likeList: ILikeList[];
}

const initialState: boardListState = {
  listData: [],
  filteredData: [],
  likeList: [],
};

export const boardListSlice = createSlice({
  name: 'boardList',
  initialState,
  reducers: {
    boardListItemAdd: (
      state,
      {
        payload: { data, likeList },
      }: PayloadAction<{ data: IBoardData[]; likeList: ILikeList[] }>
    ) => {
      const mappingData = data.map((board: IBoardData) => {
        return {
          ...board,
          like: likeList.some(
            (like: { boardId: number; boardTitle: string }) =>
              like.boardId === board.boardId
          ),
        };
      });

      state.likeList = likeList;

      const NoData = mappingData.reduce((acc: IBoardData[], cur) => {
        let result: IBoardData[] = [...acc];
        if (
          state.listData.filter((el) => cur.boardId === el.boardId).length === 0
        ) {
          result.push(cur);
        }
        return result;
      }, []);

      if (state.listData.length !== 0 && NoData.length !== 0) {
        state.listData = [...state.listData, ...NoData];
      } else if (state.listData.length === 0) {
        state.listData = NoData;
      }
    },

    boardLikeCheck: (
      state,
      {
        payload: { data, boardId },
      }: PayloadAction<{ data: boolean; boardId: number }>
    ) => {
      const filtered = state.listData.filter(
        (data) => data.boardId === boardId
      )[0];
      if (filtered) {
        filtered.likeCount = filtered.likeCount + 1;
        filtered.like = data;
      }
    },

    boardLikeUncheck: (
      state,
      {
        payload: { data, boardId },
      }: PayloadAction<{ data: boolean; boardId: number }>
    ) => {
      const filtered = state.listData.filter(
        (data) => data.boardId === boardId
      )[0];
      if (filtered) {
        filtered.likeCount = filtered.likeCount - 1;
        filtered.like = data;
      }
    },
  },
});

export const { boardListItemAdd, boardLikeCheck, boardLikeUncheck } =
  boardListSlice.actions;

export const selectBoardList = (state: RootState) => state.boardList;

export default boardListSlice.reducer;
