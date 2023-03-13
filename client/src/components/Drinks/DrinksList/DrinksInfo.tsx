import React, { useState } from "react";
import DrinksTagList from "./DrinksTagList";
import DrinkSearch from "./DrinksSearch";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

function DrinksInfo() {
  const [search, setSearch] = useState(false);

  const handleSearchChange = () => {
    setSearch((prev) => !prev);
  };

  return (
    <InfoContainer>
      {search ? <DrinkSearch /> : <DrinksTagList />}

      <SearchButton onClick={handleSearchChange}>
        <AiOutlineSearch />
      </SearchButton>
    </InfoContainer>
  );
}

export default DrinksInfo;

const InfoContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchButton = styled.div`
  color: var(--color-white);
  background-color: var(--color-main);
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--large);
  cursor: pointer;

  svg {
    font-size: var(--text-large);
  }
`;
