import React, { useState } from "react";
import styled from "styled-components";

import LogoText from "../../UI/LogoText";
import Button from "../../UI/Button";
import MenuNav from "./MenuNav";
import UserNav from "./UserNav";

function Header() {
  const [isLogin, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin((prev) => !prev);
  };

  return (
    <HeaderBackground>

      <HeaderContainer>
        <LogoText />
        <MenuNav />
        {isLogin ? <UserNav /> : <Button onClick={handleLogin}>Login</Button>}
      </HeaderContainer>
      
    </HeaderBackground>
  );
}

export default Header;

const HeaderBackground = styled.div`
  background-color: var(--color-main);
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  color: var(--color-white);
  background-color: var(--color-main);
  width: 85%;
  max-width: 1420px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
