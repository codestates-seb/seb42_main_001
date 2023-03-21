import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styled from "styled-components";
import johnnie from "../../img/johnnie_walker.svg";
import bellucci from "../../img/bellucci.jpg";
import bowmore from "../../img/bowmore.jpg";
import jager from "../../img/Jägermeiſter.jpg";
import MainDontMove from "../Main/MainDontMove";

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
      {img ? <MainDontMove /> : null}
      <ContentBox img={img}>
        <ContainerBox img={img}>
          <Container img={img}>
            <Outlet />
          </Container>
        </ContainerBox>
        {img ? (
          <>
            <ContainerBox1 img={img}></ContainerBox1>
            <ContainerBox2 img={img}></ContainerBox2>
            <ContainerBox3 img={img}></ContainerBox3>
          </>
        ) : null}
      </ContentBox>
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
  overflow: hidden;
`;

const ContentBox = styled.div<MainLayoutProps>`
  width: 400%;
  display: flex;
  margin-left: ${(props) => (props.img ? `300%` : `none`)};

  animation-duration: ${(props) => (props.img ? `18s` : `none`)};
  animation-name: ${(props) => (props.img ? `img` : `none`)};
  animation-iteration-count: ${(props) => (props.img ? `infinite` : `none`)};

  @keyframes img {
    18.75% {
      margin-left: 300%;
    }
    25% {
      margin-left: 100%;
    }
    43.75% {
      margin-left: 100%;
    }
    50% {
      margin-left: -100%;
    }
    68.75% {
      margin-left: -100%;
    }
    75% {
      margin-left: -300%;
    }
    93.75% {
      margin-left: -300%;
    }
    100% {
      margin-left: 300%;
    }
  }
`;

const ContainerBox = styled.div<MainLayoutProps>`
  width: 100%;
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

const ContainerBox1 = styled(ContainerBox)<MainLayoutProps>`
  background-image: ${(props) => (props.img ? `url(${bellucci})` : `none`)};
`;
const ContainerBox2 = styled(ContainerBox)<MainLayoutProps>`
  background-image: ${(props) => (props.img ? `url(${johnnie})` : `none`)};
`;
const ContainerBox3 = styled(ContainerBox)<MainLayoutProps>`
  background-image: ${(props) => (props.img ? `url(${jager})` : `none`)};
`;

const Container = styled.div<MainLayoutProps>`
  color: var(--color - main);
  background-color: ${(props) =>
    props.img ? `none` : `var(--color-sub-light-gray)`};

  width: 85%;
  max-width: 1420px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
