import styled from 'styled-components';
import Card from '../../ui/Card';

interface IDrinkProps {
  drinkName: string;
  drinkImg: string;
}

function MainDrinksContentDrink({ drinkName, drinkImg }: IDrinkProps) {
  return (
    <MainContainer>
      <Card>
        <ContentWrap>
          <ImgWrap src={drinkImg} alt={drinkName} />
          <TextWrap>{drinkName}</TextWrap>
        </ContentWrap>
      </Card>
    </MainContainer>
  );
}

export default MainDrinksContentDrink;

const MainContainer = styled.div`
  margin-right: 30px;
`;

const ContentWrap = styled.div`
  width: 180px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    width: 180px;
    height: 230px;
  }
`;

const ImgWrap = styled.img`
  width: auto;
  height: 110px;
  margin-bottom: 20px;

  @media only screen and (max-width: 1024px) {
    height: 120px;
  }
`;

const TextWrap = styled.div`
  display: flex;
`;
