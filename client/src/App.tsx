import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Main from "./pages/Main";
import styled from "styled-components";

function App() {
  return (
        <Routes>

          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
          </Route>

        </Routes>
  );
}

export default App;