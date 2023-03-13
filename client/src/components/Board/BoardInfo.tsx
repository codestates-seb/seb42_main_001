import React, { useState } from "react";
import styled from "styled-components";

import BoardCreate from "./BoardCreate";
import BoardSearch from "./BoardSearch";
import { AiOutlineSearch } from "react-icons/ai";

function BoardInfo() {
  const [search, setSearch] = useState(false);

  const handleSearchChange = () => {
    setSearch((prev) => !prev);
  };

  return (
    <InfoContainer>
      {search ? (
        <BoardSearch />
      ) : (
        <MarginDiv>
          <BoardCreate />
        </MarginDiv>
      )}
      <SearchButton onClick={handleSearchChange}>
        <AiOutlineSearch />
      </SearchButton>
    </InfoContainer>
  );
}

export default BoardInfo;

const InfoContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MarginDiv = styled.div`
  width: 93%;
  margin-right: var(--x-small);
  display: flex;
  justify-content: end;
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
