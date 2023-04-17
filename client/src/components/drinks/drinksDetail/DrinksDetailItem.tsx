import styled from 'styled-components';
import DrinksDetailImg from './drinksDetailItem/DrinksDetailImg';
import DrinksDetailTxt from './drinksDetailItem/DrinksDetailTxt';
import { IDrinksDetailLike } from '../../../util/interfaces/drinks.inerface';

function DrinksDetailItem({ drinksDetail, drinksLike }: IDrinksDetailLike) {
  return (
    <ItemContainer>
      <DrinksDetailImg drinksDetail={drinksDetail} />
      <DrinksDetailTxt drinksDetail={drinksDetail} drinksLike={drinksLike} />
    </ItemContainer>
  );
}

export default DrinksDetailItem;

const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1 1 0;
  margin-top: var(--4x-large);

  @media only screen and (max-width: 1042px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
