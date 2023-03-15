import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styled from "styled-components";
import johnnie from "../../img/johnnie_walker.svg";

interface MainLayoutProps {
  bgColor?: boolean;
  img?: boolean;
}

function MainLayout({ bgColor, img }: MainLayoutProps) {
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

      <Footer />
    </DefaultSize>
  );
}

export default MainLayout;

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
  height: 100%;
  background-image: ${(props) => (props.img ? `url(${johnnie})` : `none`)};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div<MainLayoutProps>`
  color: var(--color-main);
  background-color: ${(props) =>
    props.img ? `none` : `var(--color-sub-light-gray)`};
  width: 85%;
  max-width: 1420px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
