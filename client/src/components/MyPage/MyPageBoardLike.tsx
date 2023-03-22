import React from 'react';
import styled from 'styled-components';
import Card from '../UI/Card';

interface props {
  ele: {
    boardTitle: string;
    createdAt: string;
  };
}

function MyPageBoardLike({ ele }: props) {
  return (
    <Card>
      <MainContainer>
        <p>{ele.boardTitle}</p>
        <span>{ele.createdAt}</span>
      </MainContainer>
    </Card>
  );
}

export default MyPageBoardLike;

const MainContainer = styled.div`
  width: 100%;
  height: var(--3x-large);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--large);
  margin-bottom: var(--x-small);

  span {
    color: var(--color-sub-gray);
  }
`;
