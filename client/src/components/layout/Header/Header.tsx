import React, { useState } from "react";
import styled from "styled-components";

import LogoText from "../../UI/LogoText";
import Button from "../../UI/Button";
import MenuNav from "./MenuNav";
import UserNav from "./UserNav";

interface HeaderProps {
  headerBgColor?: string; 
  headerColor?: string; 
  profileColor?: string;
}

function Header({ headerBgColor, headerColor, profileColor }: HeaderProps) {
  const [isLogin, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin((prev) => !prev);
  };

  return (
    <HeaderBackground headerBgColor={headerBgColor}>
      <HeaderContainer headerBgColor={headerBgColor}>
        <LogoText headerColor={headerColor} />
        <MenuNav headerColor={headerColor} />
        {isLogin ? (
          <UserNav profileColor={profileColor} />
        ) : (
          <LoginContainer>
            <Button onClick={handleLogin}>Login</Button>
          </LoginContainer>
        )}
      </HeaderContainer>
    </HeaderBackground>
  );
}

export default Header;

const HeaderBackground = styled.div<HeaderProps>`
  background-color: ${props => props.headerBgColor ? `var(${props.headerBgColor})`:`var(--color-white)`};
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
`;

const HeaderContainer = styled.div<HeaderProps>`
  color: var(--color-main);
  background-color: ${props => props.headerBgColor ? `var(${props.headerBgColor})`:`var(--color-white)`};
  width: 85%;
  max-width: 1420px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 80px;
`;
