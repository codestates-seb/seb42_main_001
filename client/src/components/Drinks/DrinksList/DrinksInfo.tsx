import React, { useState } from "react";
import DrinksTagList from "./DrinksTagList";
import DrinkSearch from "./DrinksSearch";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "../../UI/Button";

function DrinksInfo() {
  const [search, setSearch] = useState(false);

  const handleSearchChange = () => {
    setSearch((prev) => !prev);
  };

  return (
    <InfoContainer>
      {search ? <DrinkSearch /> : <DrinksTagList />}
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
          <AiOutlineSearch />
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
`;

const SvgSize = styled.div`
  font-size: var(--small);
  display: flex;
  justify-content: center;
  align-items: center;
`;
