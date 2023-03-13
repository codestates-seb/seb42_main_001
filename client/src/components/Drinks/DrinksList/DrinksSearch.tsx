import React from "react";
import styled from "styled-components";
import Card from "../../UI/Card";

function DrinksSearch() {
  return (
    <SearchContainer>
      <Card>
        <input placeholder="Search" />
      </Card>
    </SearchContainer>
  );
}

export default DrinksSearch;

const SearchContainer = styled.div`
  width: 92%;
  
  input {
    width: 100%;
    height: 60px;
    border: none;
    outline: none;
    border-radius: var(--xx-small);
    padding-left: var(--medium);
  }
`;
