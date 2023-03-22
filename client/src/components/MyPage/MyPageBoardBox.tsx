import React from 'react';
import styled from 'styled-components';

import MyPageBoardCommentList from './MyPageBoardCommentList';
import MyPageBoardLikeList from './MyPageBoardLikeList';
import MyPageBoardList from './MyPageBoardList';

interface BarProps {
  selectedBarBorad?: string;
}

function MyPageBoardBox({ selectedBarBorad }: BarProps) {
  return (
    <MainContainer>
      {selectedBarBorad === 'Likes' ? (
        <MyPageBoardLikeList />
      ) : selectedBarBorad === 'Comments' ? (
        <MyPageBoardCommentList />
      ) : (
        <MyPageBoardList />
      )}
    </MainContainer>
  );
}

export default MyPageBoardBox;

const MainContainer = styled.div`
  width: 100%;
  height: calc(var(--4x-large) * 5);
`;
