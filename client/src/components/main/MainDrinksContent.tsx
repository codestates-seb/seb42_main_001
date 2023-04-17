import styled from 'styled-components';
import MainDrinksContentDrinks from './maindrinkscontent/MainDrinksContentDrinks';
import MainDrinksContentTitle from './maindrinkscontent/MainDrinksContentTitle';

function MainDrinksContent() {
  return (
    <MainContainer>
      <MainDrinksContentDrinks />
      <MainDrinksContentTitle />
    </MainContainer>
  );
}

export default MainDrinksContent;

const MainContainer = styled.div`
  max-width: 1420px;
  width: 85%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    height: 100%;
    flex-direction: column;
    padding: var(--3x-large) 0;
  }
`;
