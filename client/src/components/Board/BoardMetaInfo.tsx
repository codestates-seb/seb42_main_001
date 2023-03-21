import styled from "styled-components";

import BoardStats from "./BoardStats";
import BoardTags from "./BoardTags";

interface BoardMetaInfoProps {
  boardId: number;
  tags: Array<{
    tagId: number;
    tagName: string;
  }>;
  like: number;
  likes?: boolean;
  comment: number;
}

function BoardMetaInfo({
  tags,
  like,
  comment,
  likes,
  boardId,
}: BoardMetaInfoProps) {
  return (
    <BoardMetaInfoContainer>
      <BoardTags tags={tags} />
      <BoardStats
        like={like}
        comment={comment}
        likes={likes}
        boardId={boardId}
      />
    </BoardMetaInfoContainer>
  );
}

export default BoardMetaInfo;

const BoardMetaInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
