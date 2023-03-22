import React from 'react';
import styled from 'styled-components';
import Card from '../UI/Card';

interface props {
  ele: {
    drinkId: number;
    commentId: number;
    commentContent: string;
    drinkName: string;
  };
}

function MyPageDrinkComment({ ele }: props) {
  return (
    <Card>
      <MainContainer>
        <span>{ele.drinkName}</span>
        <p>{ele.commentContent}</p>
      </MainContainer>
    </Card>
  );
}

export default MyPageDrinkComment;

const MainContainer = styled.div`
  width: 100%;
  height: var(--4x-large);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--large);

  span {
    color: var(--color-sub-gray);
    margin-bottom: var(--x-small);
  }
`;
