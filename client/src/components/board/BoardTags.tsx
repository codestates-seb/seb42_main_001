import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BoardTag from './BoardTag';
import { IBoardTags } from '../../util/interfaces/boards.interface';

function BoardTags({ tags }: IBoardTags) {
  return (
    <Wapper>
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
    </Wapper>
  );
}

export default BoardTags;

const Wapper = styled.div`
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
