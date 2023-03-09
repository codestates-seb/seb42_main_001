import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styled from "styled-components";

function MainLayout() {
  return (
    <DefaultSize>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </DefaultSize>
  );
}

export default MainLayout;

const DefaultSize = styled.div`
  background-color: var(--color-sub-light-gray);
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
`;

const Container = styled.div`
  color: var(--color-main);
  background-color: var(--color-sub-light-gray);
  width: 85%;
  max-width: 1420px;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
