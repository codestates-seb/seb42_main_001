import React, { useState } from "react";
import styled from "styled-components";
import DrinksContents from "./DrinksContents";
import DrinksInfo from "./DrinksInfo";

function MainDrinks() {
  const [search, setSearch] = useState<string>('');

  return (
    <MainDrinksContainer>
      <DrinksInfo search={search} setSearch={setSearch} />
      <DrinksContents search={search} />
    </MainDrinksContainer>
  );
}

export default MainDrinks;

const MainDrinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
`;