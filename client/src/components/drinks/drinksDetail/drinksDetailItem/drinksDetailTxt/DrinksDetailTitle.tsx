import styled from "styled-components";
import { IDrinksDetailProps } from '../../../../../util/interfaces/drinks.inerface'

function DrinksDetailTitle({ drinksDetail }: IDrinksDetailProps) {
  return (
    <TitleContainer>
      <div>{drinksDetail?.drinkName}</div>
    </TitleContainer>
  );
}

export default DrinksDetailTitle;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--color-main);

  div {
    display: flex;
    width: 100%;
    font-size: var(--3x-large);
  }

    @media only screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: var(--4x-large) 0;

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--3x-large);
        }
    }

    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: var(--4x-large);

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--3x-large);
      }
    }

    @media only screen and (max-width: 479px) {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: var(--3x-large);

      div {
        font-size: calc(var(--4x-large) / 2.3);
      }
    }
`;
