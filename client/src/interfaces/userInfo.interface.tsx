import { Data } from './Boards.interface';

export interface userInfo {
  memberId: number;
  displayName: string;
  profilePicture: string;
  aboutMe: string;
  likeBoards: Data;
  likeDrinks: Array<{ drinkId: number; drinkName: string }>;
  writeBoardComments: Array<{
    commentId: number;
    commentContent: string;
    boardId: number;
    boardTitle: string;
  }>;
  writeBoards: Data;
  writeDrinkComments: Array<{
    drinkId: number;
    commentId: number;
    commentContent: string;
    drinkName: string;
  }>;
  url: string;
}
