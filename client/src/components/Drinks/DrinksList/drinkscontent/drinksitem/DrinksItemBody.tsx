import styled from 'styled-components'
import { IDrinks } from '../../../../../util/interfaces/drinks.inerface';

interface IDrinksContentsProps {
  drinksData: IDrinks;
}

function DrinksItemBody({ drinksData }: IDrinksContentsProps) {
  return (
    <BodyContainer>
      <BodyImg src={`${drinksData.drinkImageUrl}`} alt="withskey" />
      <BodyText>{drinksData.drinkName}</BodyText>
    </BodyContainer>
  )
}

export default DrinksItemBody

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: var(--large);

  @media only screen and (max-width: 768px) {
    width: 320px;
    height: auto;  
    margin-top: var(--x-small);
    margin-bottom: var(--x-small);
    }
`

const BodyImg = styled.img`
  width: auto;
  max-width: 240px;
  height: 220px;
  margin-top: var(--small);
  margin-bottom: var(--medium);

    @media only screen and (max-width: 768px) {
    width: 200px;
    height: auto;  
    margin-top: var(--x-small);
    margin-bottom: var(--x-small);
    }

    @media only screen and (max-width: 450px) {
    width: 180px;
    height: auto;
    margin-top: var(--x-small);
    margin-bottom: var(--x-small);
    }
`

const BodyText = styled.div`
  margin-top: var(--large);
  font-size: var(--text-medium);
  font-weight: var(--weight-large);

    @media only screen and (max-width: 450px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 0;
    font-size: var(--text-large);
    }
`