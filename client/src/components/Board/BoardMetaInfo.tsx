import styled from "styled-components";

import BoardStats from "./BoardStats";
import BoardTags from "./BoardTags";

interface BoardMetaInfoProps {
  tags: Array<{
    tagId: number;
    tagName: string;
  }>;
  like: number;
  comment: number;
}

function BoardMetaInfo({ tags, like, comment }: BoardMetaInfoProps) {
  return (
    <BoardMetaInfoContainer>
      <BoardTags tags={tags} />
      <BoardStats like={like} comment={comment} />
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
