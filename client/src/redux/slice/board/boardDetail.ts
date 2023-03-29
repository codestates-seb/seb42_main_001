import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

import { Data, ILikeList } from '../../../util/interfaces/boards.interface';

interface boardDetailState {
  detailData: {
    [key: string]: any;
    like?: boolean;
  };
}

const initialState: boardDetailState = {
  detailData: {},
};

export const boardDetailSlice = createSlice({
  name: 'boardList',
  initialState,
  reducers: {
    getBoardDetailData: (
      state,
      {
        payload: { data, likeList },
      }: PayloadAction<{ data: Data; likeList: ILikeList[] }>
    ) => {
      const mapping = data.comments.map((el) => {
        el.boardCommentId = el.commentId;
        return el;
      });

      state.detailData = {
        ...data,
        like: likeList.some((el) => el.boardId === data.boardId),
        comments: mapping,
      };
    },
    boardDetailLike: (
      state,
      { payload: { data } }: PayloadAction<{ data: boolean }>
    ) => {
      state.detailData.likeCount = state.detailData.likeCount + 1;
      state.detailData.like = data;
    },
    boardDetailUnLike: (
      state,
      { payload: { data } }: PayloadAction<{ data: boolean }>
    ) => {
      state.detailData.likeCount = state.detailData.likeCount - 1;
      state.detailData.like = data;
    },
  },
});

export const { getBoardDetailData, boardDetailLike, boardDetailUnLike } =
  boardDetailSlice.actions;

export const selectBoardDetail = (state: RootState) => state.boardDetail;

export default boardDetailSlice.reducer;
