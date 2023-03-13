import React from "react";
import DrinksItem from "./DrinksItem";
import styled from "styled-components";
import { Link } from "react-router-dom";

function DrinksContents() {
  return (
    <ContentsContainer>
      <Link to="/drinks/detail">
        <DrinksItem />
      </Link>
      <DrinksItem />
      <DrinksItem />
      <DrinksItem />
      <DrinksItem />
      <DrinksItem />
      <DrinksItem />
      <DrinksItem />
      <DrinksItem />
      <DrinksItem />
    </ContentsContainer>
  );
}

export default DrinksContents;

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
`;
