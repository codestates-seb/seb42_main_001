import styled from "styled-components";
import Card from "../../../ui/Card";
import { IDrinksDetailProps } from '../../../../util/interfaces/drinks.inerface'

function DrinksDetailImg({ drinksDetail }: IDrinksDetailProps) {
  return (
    <Size>
      <Card>
        <ImgContainer>
          <img src={`${drinksDetail?.drinkImageUrl}`} alt={`${drinksDetail?.drinkName}`} />
        </ImgContainer>
      </Card>
    </Size>
  );
}

export default DrinksDetailImg;

const ImgContainer = styled.div`
  max-width: 695px;
  height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--2x-large);

  img {
    max-width: 695px;
    height: 50%;
  }

  @media only screen and (max-width: 1024px) {
  max-width: 1024px;
    width: 100%;
    height: 100%;
    margin-bottom: var(--x-large);
    padding: var(--x-large) 0;

    img {
      max-width: 180px;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: var(--x-large);
    padding: var(--x-large) 0;

    img {
      max-width: 180px;
    }
  }

  @media only screen and (max-width: 479px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--large);
    padding: var(--x-large);

    img {
      max-width: 180px;
    }
  }
`;

const Size = styled.div`
  width: 100%;
`;
