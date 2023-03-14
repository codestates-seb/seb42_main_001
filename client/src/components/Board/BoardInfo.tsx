import React, { useState } from "react";
import styled from "styled-components";

import BoardCreate from "./BoardCreate";
import BoardSearch from "./BoardSearch";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "../UI/Button";

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
      <Button
        type="button"
        size={`--x-large`}
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

const SvgSize = styled.div`
  font-size: var(--small);
  display: flex;
  justify-content: center;
  align-items: center;
`;
