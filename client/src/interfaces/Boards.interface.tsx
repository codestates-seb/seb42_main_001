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
}
