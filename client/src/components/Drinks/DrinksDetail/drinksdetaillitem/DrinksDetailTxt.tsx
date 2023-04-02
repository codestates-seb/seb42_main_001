import React from 'react';
import styled from 'styled-components';
import DrinksDetailBox from './drinksdetailtxt/DrinksDetailBox';
import DrinksDetailInfo from './drinksdetailtxt/DrinksDetailInfo';
import DrinksDetailTitle from './drinksdetailtxt/DrinksDetailTitle';
import { IDrinksDetailLike } from '../../../../util/interfaces/drinks.inerface';

function DrinksDetailTxt({ drinksDetail, drinksLike }: IDrinksDetailLike) {
  return (
    <TxtContainer>
      <DrinksDetailInfo drinksDetail={drinksDetail} />
      <DrinksDetailTitle drinksDetail={drinksDetail} />
      <DrinksDetailBox drinksDetail={drinksDetail} drinksLike={drinksLike} />
    </TxtContainer>
  );
}

export default DrinksDetailTxt;

const TxtContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: var(--4x-large);
  padding: var(--medium) 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;
