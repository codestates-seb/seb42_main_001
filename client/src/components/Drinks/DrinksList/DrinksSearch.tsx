import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Card from "../../UI/Card";

interface ISearchProps {
  search?: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

function DrinksSearch({ search, setSearch }: ISearchProps) {

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <SearchContainer>
      <Card>
        <input placeholder="Search" value={search} onChange={handleSearchValueChange} />
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
