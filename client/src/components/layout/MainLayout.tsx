import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styled from 'styled-components';

interface MainLayoutProps {
  bgColor?: boolean;
}

function MainLayout({ bgColor }: MainLayoutProps) {
  return (
    <DefaultSize bgColor={bgColor}>
      {bgColor ? (
        <Header headerBgColor={`--color-main`} headerColor={`--color-white`} />
      ) : (
        <Header profileColor={`--color-main`} />
      )}
      <Container>
        <Outlet />
      </Container>

      <Footer />
    </DefaultSize>
  );
}

export default MainLayout;

const DefaultSize = styled.div<MainLayoutProps>`
  background-color: ${props=>props.bgColor?`var(--color-sub-light-gray)`:`var(--color-main)`};
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  color: var(--color-main);
  background-color: var(--color-sub-light-gray);
  width: 85%;
  max-width: 1420px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
