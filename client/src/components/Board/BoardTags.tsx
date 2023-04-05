import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BoardTag from './BoardTag';

interface BoardTagsProps {
  tags?: Array<{
    tagId: number;
    tagName: string;
  }>;
}

function BoardTags({ tags }: BoardTagsProps) {
  return (
    <TagsBox>
      {tags &&
        tags.map((el) => {
          return (
            <Link key={el.tagId} to={`/tags/${el.tagId}`}>
              <TagsContainer>
                <BoardTag tag={el.tagName} />
              </TagsContainer>
            </Link>
          );
        })}
    </TagsBox>
  );
}

export default BoardTags;

const TagsBox = styled.div`
  display: flex;
  height: 25px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: var(--3x-small);
`;
