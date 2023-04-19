export interface IBoardData {
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

export interface ILikeList {
  boardId: number;
  boardTitle: string;
}

export interface IData {
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
  recommandBoards: IRecommandBoards[];
  comments: IComments[];
}

export interface IRecommandBoards {
  boardId: number;
  boardTitle: string;
}

export interface IComments {
  boardCommentId?: number;
  drinkCommentId?: number;
  commentId: number;
  memberId: number;
  displayName: string;
  commentContent: string;
  createAt: string;
}

export interface ISetData {
  boardTitle: string;
  boardContent: string;
  boardImageUrl: IImgs[];
  tags: ITags[];
}

export interface IBoardInfo {
  isSearch: boolean;
  setIsLoading: (state: boolean) => void;
  setInput: (state: string) => void;
}

export interface IBoardSearch {
  isInput: string;
  setIsInput: (state: string) => void;
  setInput: (state: string) => void;
}

export interface IBoardAuthorInfo {
  memberName?: string;
  profileImageUrl?: string;
  createdAt?: string;
}

export interface IBoardContents {
  boardTitle?: string;
  content?: string;
}

export interface IBoardMetaInfo {
  boardId: number;
  tags: Array<{
    tagId: number;
    tagName: string;
  }>;
  likeCount: number;
  like: boolean;
  commentCount: number;
}

export interface IBoardLikes {
  boardId: number;
  likeCount?: number;
  like: boolean;
}

export interface IBoardComments {
  commentCount?: number;
}

export interface ICommentModal {
  handleModalOpen?: () => void;
}

export interface IComment {
  drinkCommentId?: number;
  boardCommentId?: number;
  boardId?: number;
  memberId?: number;
  setIsEdit?: (state: boolean) => void;
  handleModalOpen: (state: boolean) => void;
  handleBoardEdit?: () => void;
}

export interface IBoardTags {
  tags?: Array<{
    tagId: number;
    tagName: string;
  }>;
}

export interface IBoardTag {
  tag: string;
}

export interface ICommentInput {
  drinkId?: number;
  boardId?: number;
}

export interface ITags {
  tagId: number;
  tagName: string;
}

export interface IImgs {
  imageId: number;
  boardImageUrl: string;
}

export interface ITagSearch {
  tagsData: Array<{
    tagId: number;
    tagName: string;
  }>;
  handleTagAdd: (ele: { tagId: number; tagName: string }) => void;
}

export interface ICreateTag {
  ele: {
    tagId: number;
    tagName: string;
  };
  onClick: (ele: { tagId: number; tagName: string }) => void;
}

export interface IBoardCreateTags {
  tags: Array<{ tagId: number; tagName: string }>;
  handleTagRemove: (ele: { tagId: number; tagName: string }) => void;
}

export interface IBoardCreateBtn {
  handleBoardSubmit: () => void;
}

export interface IBoardCreateInput {
  handleBoardTitleChange: (title: string) => void;
  handleBoardContentChange: (content: string) => void;
  handleBoardImageAdd: (url: {
    imageId: number;
    boardImageUrl: string;
  }) => void;
  editData?: IData;
  preData?: ISetData;
}
