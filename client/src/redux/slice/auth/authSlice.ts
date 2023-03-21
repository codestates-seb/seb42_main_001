import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

interface token {
  accessToken: string;
  refreshToken: string;
}

interface userInfo {
  memberId: number;
  displayName: string;
  profilePicture: null;
  aboutMe: string | null;
  likeBoards: Array<Object>;
  likeDrinks: Array<Object>;
  url: string | null;
  writeBoardComments: Array<Object>;
  writeBoards: Array<Object>;
  writeDrinkComments: Array<Object>;
}

interface authState {
  isLogin: boolean;
  token: token | null;
  userInfo: userInfo | null;
}

const initialState: authState = {
  isLogin: false,
  token: null,
  userInfo: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLogin = true;
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
    },
    logoutSuccess: state => {
      state.isLogin = false;
      state.token = null;
      state.userInfo = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.isLogin;

export default authSlice.reducer;
