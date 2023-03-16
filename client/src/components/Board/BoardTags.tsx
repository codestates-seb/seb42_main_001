import { Link } from "react-router-dom";
import styled from "styled-components";

import BoardTag from "./BoardTag";

interface BoardTagsProps {
  tags: Array<{
    tagId: number;
    tagName1: string;
  }>;
}

function BoardTags({ tags }: BoardTagsProps) {
  return (
    <>
      {tags.map((el) => {
        return (
          <Link to={`/tags/${el.tagId}`}>
            <TagsContainer>
              <BoardTag tag={el.tagName1} />
            </TagsContainer>
          </Link>
        );
      })}
    </>
  );
}

export default BoardTags;

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
`;
