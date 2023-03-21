import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import DrinksTagList from "./DrinksTagList";
import DrinkSearch from "./DrinksSearch";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "../../UI/Button";

interface ISearchProps {
  search?: string;
  setSearch: Dispatch<SetStateAction<string>>;
  searchTag?: number;
  setSearchTag: (state: number) => void;
  setPage: (state: number) => void;
}

function DrinksInfo({ search, setSearch, searchTag, setSearchTag, setPage }: ISearchProps) {
  const [searchButton, setSearchButton] = useState(false);

  // searchButton on/off
  const handleSearchChange = () => {
    setSearchButton((prev) => !prev);
    setSearch('')
  };

  const handleTagClear = () => {
    setSearchTag(0)
    setPage(1)
  }

  return (
    <InfoContainer>
      {searchButton
        ? <DrinkSearch search={search} setSearch={setSearch} />
        : <DrinksTagList setSearchTag={setSearchTag} />
      }
      <Button
        type="button"
        width={`--x-large`}
        radius={`--large`}
        color={`--color-white`}
        bgColor={`--color-main`}
        borderColor={`--color-main`}
        onClick={handleSearchChange}
      >
        <SvgSize>
          <AiOutlineSearch onClick={handleTagClear} />
        </SvgSize>
      </Button>
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

  @media only screen and (max-width: 768px) {
  justify-content: end;
  }
`;

const SvgSize = styled.div`
  font-size: var(--small);
  display: flex;
  justify-content: center;
  align-items: center;

  
`;
