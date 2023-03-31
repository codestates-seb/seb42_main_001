import styled from 'styled-components';

function MainBannerContentTitle() {
  return (
    <MainContentBodyContainer>
      <MainContentDrink>TWELVE YEARS OLD</MainContentDrink>
      <MainContentDrinkName>BOWMORE</MainContentDrinkName>
      <MainContentDrinktype>
        ISLAY SINGLE MALT SCOTCH WHISKY
      </MainContentDrinktype>
    </MainContentBodyContainer>
  );
}

export default MainBannerContentTitle;

const MainContentBodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1150px) {
    width: 100%;
  }
`;

const MainContentDrink = styled.div`
  font-size: var(--large);
  color: var(--color-white);

  @media only screen and (max-width: 1150px) {
    width: 100%;
    font-size: var(--small);
  }
`;

const MainContentDrinkName = styled.div`
  font-family: 'Alegreya SC', serif;
  font-size: var(--4x-large);
  color: var(--color-white);

  @media only screen and (max-width: 1150px) {
    width: 100%;
    font-size: var(--2x-large);
  }
`;

const MainContentDrinktype = styled.div`
  font-size: var(--text-medium);
  color: var(--color-white);

  @media only screen and (max-width: 1150px) {
    width: 100%;
    font-size: var(--text-x-small);
  }
`;
