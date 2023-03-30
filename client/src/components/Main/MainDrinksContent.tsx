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
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;

  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;
