import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

import { userInfo } from '../../../interfaces/userInfo.interface';
interface authState {
  isLogin: boolean;
  userInfo: userInfo | Record<string, never>;
}

const initialState: authState = {
  isLogin: false,
  userInfo: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (
      state,
      { payload: { userInfo } }: PayloadAction<{ userInfo: userInfo }>,
    ) => {
      state.isLogin = true;
      state.userInfo = userInfo;
    },
    logoutSuccess: state => {
      state.isLogin = false;
      state.userInfo = {};
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.isLogin;

export default authSlice.reducer;
