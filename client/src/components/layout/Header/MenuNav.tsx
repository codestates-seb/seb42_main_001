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
  color: ${(props) =>
    props.headerColor ? `var(${props.headerColor})` : `var(--color-main)`};
  font-size: var(--text-small);
  display: flex;
`;

const MenuItemStyled = styled.div`
  margin: 0 35px;
`;
