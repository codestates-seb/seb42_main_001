import { useState } from 'react';
import styled from 'styled-components';

import Card from '../UI/Card';
import MyPageContentBar from './MyPageContentBar';
import MyPageDrinksBox from './MyPageDrinksBox';

function MyPageDrinks() {
  const [selectedBar, setSelectedBar] = useState(false);

  return (
    <MarginContainer>
      <Card>
        <MainContainer>
          <Title>Drinks</Title>
          <MyPageContentBar setSelectedBar={setSelectedBar} />
          <MyPageDrinksBox selectedBar={selectedBar} />
        </MainContainer>
      </Card>
    </MarginContainer>
  );
}

export default MyPageDrinks;

const MarginContainer = styled.div`
  width: 100%;
  margin-right: var(--x-small);
  width: 30%;
  flex: 0 0 auto;
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
