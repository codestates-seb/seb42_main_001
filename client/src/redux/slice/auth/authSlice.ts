import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
interface userInfo {
  memberId: number;
  displayName: string;
  profilePicture: string | null;
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
  userInfo: userInfo | null;
}

const initialState: authState = {
  isLogin: false,
  userInfo: null,
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
      state.userInfo = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.isLogin;

export default authSlice.reducer;
