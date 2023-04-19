import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

import { IData, ILikeList } from '../../../util/interfaces/boards.interface';

interface boardDetailState {
  detailData: {
    [key: string]: any;
    like: boolean;
  };
}

const initialState: boardDetailState = {
  detailData: { like: false },
};

export const boardDetailSlice = createSlice({
  name: 'boardList',
  initialState,
  reducers: {
    getBoardDetailData: (
      state,
      {
        payload: { data, likeList },
      }: PayloadAction<{ data: IData; likeList: ILikeList[] }>
    ) => {
      const mappingData = data.comments.map((comment) => {
        comment.boardCommentId = comment.commentId;
        return comment;
      });

      state.detailData = {
        ...data,
        like: likeList.some((like) => like.boardId === data.boardId),
        comments: mappingData,
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
