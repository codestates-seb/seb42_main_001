import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface MenuNavProps {
  headerColor?: string;
}

function MenuNav({ headerColor }: MenuNavProps) {
  return (
    <MenuStyled headerColor={headerColor}>
      <Link to="/article">
        <MenuItemStyled>Article</MenuItemStyled>
      </Link>
      <Link to="/drinks/list">
        <MenuItemStyled>Drinks</MenuItemStyled>
      </Link>
      <Link to="/board/list">
        <MenuItemStyled>Board</MenuItemStyled>
      </Link>
    </MenuStyled>
  );
}

export default MenuNav;

const MenuStyled = styled.div<MenuNavProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 60px;
  color: ${(props) =>
    props.headerColor ? `var(${props.headerColor})` : `var(--color-main)`};
  font-size: var(--text-small);
  display: flex;
`;

const MenuItemStyled = styled.div<MenuNavProps>`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  &:hover {
    margin-bottom: var(--3x-small);
  }

  @media only screen and (max-width: 768px) {
    width: 60px;
  }
`;
