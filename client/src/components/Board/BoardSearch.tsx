import React from "react";
import styled from "styled-components";
import { BoardDataProps } from "../../interfaces/Boards.interface";
import Card from "../UI/Card";

interface BoardSearchProps {
  data?: BoardDataProps[];
  filterItems: (data: BoardDataProps[]) => void;
}

function BoardSearch({ data, filterItems }: BoardSearchProps) {
  const handleDataFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (data) {
      filterItems(
        data.filter((el) => el.boardTitle.includes(e.target.value.toString()))
      );
      console.log(e.target.value);
    }
  };

  return (
    <SearchContainer>
      <Card>
        <input placeholder="Search" onChange={handleDataFilter} />
      </Card>
    </SearchContainer>
  );
}

export default BoardSearch;

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
