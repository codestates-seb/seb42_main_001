import { useState } from 'react';
import styled from 'styled-components';

import Card from '../ui/Card';
import MyPageContentBar from './MyPageContentBar';
import MyPageBoardBox from './MyPageBoardBox';

function MyPageBoard() {
  const [selectedBarBorad, setSelectedBarBorad] = useState('Likes');

  return (
    <MarginContainer>
      <Card>
        <MainContainer>
          <Title>Board</Title>
          <MyPageContentBar
            setSelectedBarBorad={setSelectedBarBorad}
            board="board"
          />
          <MyPageBoardBox selectedBarBorad={selectedBarBorad} />
        </MainContainer>
      </Card>
    </MarginContainer>
  );
}

export default MyPageBoard;

const MarginContainer = styled.div`
  width: 100%;
  margin-left: var(--x-small);
  width: 65%;
  flex: 1 0 auto;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: var(--x-large);
`;

const Title = styled.div`
  font-weight: var(--weight-medium);
  margin-bottom: var(--large);
`;
