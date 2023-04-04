import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LogoText from '../../UI/LogoText';
import Button from '../../UI/Button';
import MenuNav from './MenuNav';
import UserNav from './UserNav';
import { useAppSelector } from '../../../redux/hooks/hooks';

interface HeaderProps {
  headerBgColor?: string;
  headerColor?: string;
  profileColor?: string;
  hover?: string;
}

function Header({ headerBgColor, headerColor, profileColor }: HeaderProps) {
  const isLogin = useAppSelector(state => state.auth.isLogin);

  return (
    <HeaderBackground headerBgColor={headerBgColor}>
      <HeaderContainer headerBgColor={headerBgColor}>
        <LogoText headerColor={headerColor} />
        <MenuNav headerColor={headerColor} />
        {isLogin ? (
          <UserNav profileColor={profileColor} />
        ) : (
          <Link to="/signup">
            <LoginContainer headerColor={headerColor}>
              <Button type="submit">Login</Button>
            </LoginContainer>
          </Link>
        )}
      </HeaderContainer>
    </HeaderBackground>
  );
}

export default Header;

const HeaderBackground = styled.div<HeaderProps>`
  background-color: ${props =>
    props.headerBgColor ? `var(${props.headerBgColor})` : `var(--color-white)`};
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  z-index: 999;
`;

const HeaderContainer = styled.div<HeaderProps>`
  color: var(--color-main);
  background-color: ${props =>
    props.headerBgColor ? `var(${props.headerBgColor})` : `var(--color-white)`};
  width: 85%;
  max-width: 1420px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoginContainer = styled.div<HeaderProps>`
  display: flex;
`;
