import styled from 'styled-components';

import MyPageBoard from './MyPageBoard';
import MyPageDrinks from './MyPageDrinks';

function MyPageContent() {
  return (
    <MainContainer>
      <MyPageDrinks />
      <MyPageBoard />
    </MainContainer>
  );
}

export default MyPageContent;

const MainContainer = styled.div`
  display: flex;
  margin-bottom: calc(var(--5x-large) * 5);
`;
