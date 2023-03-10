import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Main from "./pages/Main";
import DrinksList from "./pages/DrinksList";
import DrinksDetail from "./pages/DrinksDetail";

function App() {
  return (
        <Routes>

          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/drinks" element={<DrinksList />} />
            <Route path="/drinksdetail" element={<DrinksDetail />} />
          </Route>

        </Routes>
  );
}

export default App;