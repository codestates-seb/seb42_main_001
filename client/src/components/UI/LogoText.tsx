import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface LogoTextProps {
  headerColor?: string;
}

function LogoText({ headerColor }: LogoTextProps) {
  return (
    <Link to="/">
      <Logo headerColor={headerColor}>WITH'S kEY</Logo>
      <LogoMobile headerColor={headerColor}>WS</LogoMobile>
    </Link>
  );
}

export default LogoText;

const Logo = styled.div<LogoTextProps>`
  font-family: "Bayon", sans-serif;
  font-size: var(--text-medium);
  color: ${(props) =>
    props.headerColor ? `var(${props.headerColor})` : `var(--color-main)`};
  transition: 1s;
  width: 100px;

  &:hover {
    letter-spacing: 2px;
  }

  @media only screen and (max-width: 768px) {
  display: none;
}
`;

const LogoMobile = styled.div< LogoTextProps>`
  font-family: "Bayon", sans-serif;
  font-size: var(--text-medium);
  color: ${(props) =>
    props.headerColor ? `var(${props.headerColor})` : `var(--color-main)`};
  transition: 1s;
  width: 30px;
  display: none;

  @media only screen and (max-width: 768px) {
  display: block;
}
`