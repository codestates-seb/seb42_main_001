import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Main from "./pages/Main";
import styled from "styled-components";
import ArticleList from "./pages/ArticleList";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/article" element={<ArticleList />} />
      </Route>
    </Routes>
  );
}

export default App;

const DefaultSize = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

const BodySize = styled.div`
  width: 85%;
  max-width: 1420px;
  border: 1px solid black;
  display: flex;
`;
