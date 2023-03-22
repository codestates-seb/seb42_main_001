export interface BoardDataProps {
  boardId: number;
  memberId: number;
  memberName: string;
  profileImageUrl: string;
  boardTitle: string;
  content: string;
  tags: Array<{
    tagId: number;
    tagName: string;
  }>;
  likeCount: number;
  commentCount: number;
  createdAt: string;
  modifiedAt: string;
  like: boolean;
}

export interface Data {
  boardId: number;
  boardImages: Array<{
    imageId: number;
    imageUrl: string;
  }>;
  boardTitle: string;
  content: string;
  memberId: number;
  memberName: string;
  profileImageUrl: string;
  createdAt: string;
  modifiedAt: string;
  likeCount: number;
  commentCount: number;
  tags: Array<{
    tagId: number;
    tagName: string;
  }>;
  recommandBoards: Array<{
    boardId: number;
    boardTitle: string;
  }>;
  comments: Array<{
    boardCommentId?: number;
    drinkCommentId?: number;
    commentId: number;
    memberId: number;
    displayName: string;
    commentContent: string;
    createAt: string;
  }>;
}
