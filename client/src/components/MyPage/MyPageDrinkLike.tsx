import React from 'react';
import styled from 'styled-components';
import Card from '../UI/Card';

interface props {
  ele: {
    drinkId: number;
    drinkName: string;
  };
}

function MyPageDrinkLike({ ele }: props) {
  return (
    <Card>
      <MainContainer>{ele.drinkName}</MainContainer>
    </Card>
  );
}

export default MyPageDrinkLike;

const MainContainer = styled.div`
  width: 100%;
  height: var(--3x-large);
  display: flex;
  justify-content: center;
  align-items: center;
`;
