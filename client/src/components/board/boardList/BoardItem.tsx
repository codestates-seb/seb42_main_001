import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from '../../ui/Card';
import BoardContents from './BoardContents';
import BoardMetaInfo from './BoardMetaInfo';
import BoardAuthorInfo from '.././BoardAuthorInfo';
import { IBoardData } from '../../../util/interfaces/boards.interface';

interface IBoardItemProps {
  data: IBoardData;
}

function BoardItem({ data }: IBoardItemProps) {
  return (
    <MarginContainer>
      <Card>
        <ItemContainer>
          <Link to={`/board/detail/${data.boardId}`}>
            <BoardAuthorInfo
              memberName={data.memberName}
              profileImageUrl={data.profileImageUrl}
              createdAt={data.createdAt}
            />
            <BoardContents
              boardTitle={data.boardTitle}
              content={data.content}
            />
          </Link>
          <BoardMetaInfo
            boardId={data.boardId}
            tags={data.tags}
            likeCount={data.likeCount}
            commentCount={data.commentCount}
            like={data.like}
          />
        </ItemContainer>
      </Card>
    </MarginContainer>
  );
}

export default BoardItem;

const MarginContainer = styled.div`
  margin-bottom: calc(var(--4x-large) / 2);
  margin-right: var(--x-small);
  margin-left: var(--x-small);

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: calc(var(--2x-large) / 2);
  }
`;

const ItemContainer = styled.div`
  padding: var(--x-large);
  width: 680px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.4s;

  &:hover {
    transition: 0.4s;
    border-radius: 10px;
    box-shadow: 0px 0px 20px #473f3f73;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: var(--large);
  }

  > a {
    width: 100%;
    max-width: 680px;
  }
`;
