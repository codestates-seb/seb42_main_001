import styled from "styled-components";
import { IDrinksDetailProps } from '../../../../../util/interfaces/drinks.inerface'

function DrinksDetailInfo({ drinksDetail }: IDrinksDetailProps) {

  return (
    <InfoContainer>
      <TopBorder>
        <span>{drinksDetail?.priceRank}</span>
      </TopBorder>
      <InfoContainer>
        <TopBorderMargin>
          <span>도수</span>
          <p>{`${drinksDetail?.drinkAbv}%`}</p>
        </TopBorderMargin>
        <TopBorderMargin>
          <span>용량</span>
          <p>375ml</p>
        </TopBorderMargin>
      </InfoContainer>
    </InfoContainer>
  );
}

export default DrinksDetailInfo;

const InfoContainer = styled.div`
  font-size: var(--text-small);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: var(--color-main);

  span {
    font-weight: var(--weight-large);
  }

    @media only screen and (max-width: 768px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }    
    
    @media only screen and (max-width: 479px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: calc(var(--2x-large) / 2);
    }
`;

const TopBorder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid var(--color-main);
  padding: var(--2x-small);

    @media only screen and (max-width: 768px) {
      margin: 0;
      margin-bottom: var(--x-small);
    }
`;

const TopBorderMargin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid var(--color-main);
  padding: var(--2x-small);
  margin-left: var(--large);

    @media only screen and (max-width: 768px) {
      margin: 0;
      margin-bottom: var(--x-small);
    }
`;
