import styled from "styled-components";

const MainContentBody = () => {
  return (
    <MainContentBodyContainer>
      <MainContentDrink>Johnnie Walker</MainContentDrink>
      <MainContentDrinkName>BLUE LABEL</MainContentDrinkName>
      <MainContentDrinktype>Blended Scotch Whisky</MainContentDrinktype>
    </MainContentBodyContainer>
  );
};

export default MainContentBody;

const MainContentBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContentDrink = styled.div`
  font-size: var(--large);
  color: var(--color-white);
`;

const MainContentDrinkName = styled.div`
  font-family: "Alegreya SC", serif;
  font-size: var(--xxx-large);
  color: var(--color-white);
`;

const MainContentDrinktype = styled.div`
  font-size: var(--text-medium);
  color: var(--color-white);
`;
