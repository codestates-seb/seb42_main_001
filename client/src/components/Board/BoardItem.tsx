import styled from 'styled-components';

import Card from '../UI/Card';
import BoardContents from './BoardContents';
import BoardMetaInfo from './BoardMetaInfo';
import BoardAuthorInfo from './BoardAuthorInfo';
import { Link } from 'react-router-dom';

interface BoardItemprops {
  data: {
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
    like?: boolean;
    likeCount: number;
    commentCount: number;
    createdAt: string;
    modifiedAt: string;
  };
}

function BoardItem({ data }: BoardItemprops) {
  return (
    <MarginContainer>
      <Card>
        <ItemContainer>
          <BoardAuthorInfo
            userName={data.memberName}
            userImage={data.profileImageUrl}
            date={data.createdAt}
          />
          <Link to={`/board/detail/${data.boardId}`}>
            <BoardContents title={data.boardTitle} content={data.content} />
          </Link>
          <BoardMetaInfo
            boardId={data.boardId}
            tags={data.tags}
            like={data.likeCount}
            comment={data.commentCount}
            likes={data.like}
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
  }

  > a {
    width: 100%;
  }
`;
