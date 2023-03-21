import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DrinksContents from "./DrinksContents";
import DrinksInfo from "./DrinksInfo";

function MainDrinks() {
  const [search, setSearch] = useState<string>('');
  const [searchTag, setSearchTag] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  // console.log(searchTag)


  return (
    <MainDrinksContainer>
      <DrinksInfo search={search} setSearch={setSearch} searchTag={searchTag} setSearchTag={setSearchTag} setPage={setPage} />
      <DrinksContents search={search} searchTag={searchTag} page={page} setPage={setPage} />
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