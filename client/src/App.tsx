import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import MainLayout from "./components/layout/MainLayout";
import DrinksList from "./pages/DrinksList";
import DrinksDetail from "./pages/DrinksDetail";
import ArticleList from "./pages/ArticleList";
import MyPage from "./pages/MyPage";
import BoardList from "./pages/BoardList";
import BoardDetail from "./pages/BoardDetail";
import Tags from "./pages/Tags";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/article" element={<ArticleList />} />
        <Route path="/mypage" element={<MyPage />} />
      </Route>
      <Route element={<MainLayout bgColor />}>
        <Route path="/board/list" element={<BoardList />} />
        <Route path="/board/detail" element={<BoardDetail />} />
        <Route path="/drinks/list" element={<DrinksList />} />
        <Route path="/drinks/detail" element={<DrinksDetail />} />
        <Route path="/tags" element={<Tags />} />
      </Route>
    </Routes>
  );
}

export default App;
