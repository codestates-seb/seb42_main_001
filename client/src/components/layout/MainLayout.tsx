import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styled from "styled-components";
import irish from "../../img/irish.jpg";
import jackblack from "../../img/jack-black.jpg";
import bowmore from "../../img/bowmore.jpg";
import drink1887 from "../../img/1887.jpg";
import MainDontMove from "../Main/MainDontMove";

interface MainLayoutProps {
  bgColor?: boolean;
  img?: boolean;
}

function MainLayout({ bgColor, img }: MainLayoutProps) {
  const [page, setPage] = useState(0);

  const handlePreClick = () => {
    setPage((prev) => (prev - 1 + 4) % 4);
  };

  const handleNextClick = () => {
    setPage((prev) => (prev + 1) % 4);
  };

  useEffect(() => {
    if (img) {
      const interval = setInterval(() => {
        setPage((prev) => (prev + 1) % 4);
      }, 4000);
      return () => clearInterval(interval);
    } else {
      setPage(0);
    }
  }, [page, img]);

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
      {img ? (
        <MainDontMove
          handlePreClick={handlePreClick}
          handleNextClick={handleNextClick}
        />
      ) : null}
      <ContentBox img={img} page={page}>
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

const ContentBox = styled.div<{ img?: boolean; page: number }>`
  width: ${(props) => (props.img ? `400%` : `100%`)};
  display: flex;
  margin-left: ${(props) => (props.img ? `300%` : `none`)};
  transition: ${(props) => (props.img ? `1s` : `none`)};
  transform: ${(props) =>
    props.img ? `translateX(-${props.page * 25}%)` : `none`};
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

const ContainerBox1 = styled(ContainerBox) <MainLayoutProps>`
  background-image: ${(props) => (props.img ? `url(${irish})` : `none`)};
`;
const ContainerBox2 = styled(ContainerBox) <MainLayoutProps>`
  background-image: ${(props) => (props.img ? `url(${jackblack})` : `none`)};
`;
const ContainerBox3 = styled(ContainerBox) <MainLayoutProps>`
  background-image: ${(props) => (props.img ? `url(${drink1887})` : `none`)};
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
