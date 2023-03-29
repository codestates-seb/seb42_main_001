import React from 'react';
import styled from 'styled-components';
import MyPageDrinkCommentList from './MyPageDrinkCommentList';
import MyPageDrinkLikeList from './MyPageDrinkLikeList';

interface BoxProps {
  selectedBar: boolean;
}

function MyPageDrinksBox({ selectedBar }: BoxProps) {
  return (
    <MainContainer>
      {selectedBar ? <MyPageDrinkCommentList /> : <MyPageDrinkLikeList />}
    </MainContainer>
  );
}

export default MyPageDrinksBox;

const MainContainer = styled.div`
  width: 100%;
  height: calc(var(--4x-large) * 5);
  padding: 20px;
  overflow: scroll;

  &:hover {
    border: 0.3px solid var(--color-sub-dark-gray);
    border-radius: var(--2x-small);
  }
`;
