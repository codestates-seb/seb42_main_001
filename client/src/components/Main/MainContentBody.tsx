import styled from "styled-components";

const MainContentBody = () => {
  return (
    <MainContentBodyContainer>
      <MainContentDrink>TWELVE YEARS OLD</MainContentDrink>
      <MainContentDrinkName>BOWMORE</MainContentDrinkName>
      <MainContentDrinktype>
        ISLAY SINGLE MALT SCOTCH WHISKY
      </MainContentDrinktype>
    </MainContentBodyContainer>
  );
};

export default MainContentBody;

const MainContentBodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const MainContentDrink = styled.div`
  font-size: var(--large);
  color: var(--color-white);

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const MainContentDrinkName = styled.div`
  font-family: "Alegreya SC", serif;
  font-size: var(--4x-large);
  color: var(--color-white);

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const MainContentDrinktype = styled.div`
  font-size: var(--text-medium);
  color: var(--color-white);

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
