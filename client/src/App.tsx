import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Main from "./pages/Main";

import DrinksList from "./pages/DrinksList";
import DrinksDetail from "./pages/DrinksDetail";
import ArticleList from "./pages/ArticleList";
import Mypage from "./pages/MyPage";

function App() {
  return (
        <Routes>

          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/drinks" element={<DrinksList />} />
            <Route path="/drinksdetail" element={<DrinksDetail />} />
            <Route path="/article" element={<ArticleList />} />
            <Route path="/mypage" element={<Mypage />} />
          </Route>
        </Routes>
  );
}

export default App;
