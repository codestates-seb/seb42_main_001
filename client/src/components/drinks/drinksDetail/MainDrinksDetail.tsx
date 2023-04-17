import styled from 'styled-components';
import DrinksDetailComment from './DrinksDetailComment';
import DrinksDetailContent from './DrinksDetailContent';
import DrinksDetailItem from './DrinksDetailItem';
import { IDrinksDetailLike } from '../../../util/interfaces/drinks.inerface';

function MainDrinksDetail({ drinksDetail, drinksLike }: IDrinksDetailLike) {
  return (
    <MainDetailContainer>
      <DrinksDetailItem drinksDetail={drinksDetail} drinksLike={drinksLike} />
      <DrinksDetailContent drinksDetail={drinksDetail} />
      <DrinksDetailComment drinksDetail={drinksDetail} />
    </MainDetailContainer>
  );
}

export default MainDrinksDetail;

const MainDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
