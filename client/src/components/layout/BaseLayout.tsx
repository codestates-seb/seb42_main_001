import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import styled from 'styled-components';
import bowmore from '../../assets/img/bowmore.jpg';

interface MainLayoutProps {
  bgColor?: boolean;
  img?: boolean;
}

function BaseLayout({ bgColor, img }: MainLayoutProps) {
  return (
    <DefaultSize bgColor={bgColor}>
      {bgColor ? (
        <Header
          headerBgColor={`--color-main`}
          headerColor={`--color-white`}
          hover={`--color-sub-light-gray`}
        />
      ) : (
        <Header profileColor={`--color-main`} hover={`--color-white`} />
      )}
      <ContainerBox img={img}>
        <Container img={img}>
          <Outlet />
        </Container>
      </ContainerBox>
    </DefaultSize>
  );
}

export default BaseLayout;

const DefaultSize = styled.div<MainLayoutProps>`
  width: 100vw;
  height: 100%;
  background-color: ${(props) =>
    props.bgColor ? `var(--color-sub-light-gray)` : `var(--color-main)`};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContainerBox = styled.div<MainLayoutProps>`
  width: 100%;
  height: auto;
  background-image: ${(props) => (props.img ? `url(${bowmore})` : `none`)};
  background-repeat: no - repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and(max-width: 768px) {
    width: 100%;
    background-position: 40% 50%;
    background-size: cover;
  }
`;

const Container = styled.div<MainLayoutProps>`
  color: var(--color - main);
  background-color: ${(props) =>
    props.img ? `none` : `var(--color-sub-light-gray)`};
  width: 85%;
  height: auto;
  max-width: 1420px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
