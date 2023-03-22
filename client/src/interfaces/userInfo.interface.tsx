export interface userInfo {
  memberId: number;
  displayName: string;
  profilePicture: string;
  aboutMe: string;
  likeBoards: Array<{
    boardId: number;
    boardTitle: string;
    content: string;
    memberId: number;
    memberName: string;
    profileImageUrl: string;
    createdAt: string;
    modifiedAt: string;
    likeCount: number;
    commentCount: number;
    tags?: [];
  }>;
  likeDrinks: Array<{ drinkId: number; drinkName: string }>;
  writeBoardComments: Array<{
    commentId: number;
    commentContent: string;
    boardId: number;
    boardTitle: string;
  }>;
  writeBoards: Array<{
    boardId: number;
    boardTitle: string;
    content: string;
    memberId: number;
    memberName: string;
    profileImageUrl: string;
    createdAt: string;
    modifiedAt: string;
    likeCount: number;
    commentCount: number;
    tags?: [];
  }>;
  writeDrinkComments: Array<{
    drinkId: number;
    commentId: number;
    commentContent: string;
    drinkName: string;
  }>;
  url: string;
}
