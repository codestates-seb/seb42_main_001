import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import MainLayout from './components/layout/MainLayout';
import DrinksList from './pages/DrinksList';
import DrinksDetail from './pages/DrinksDetail';
import ArticleList from './pages/ArticleList';
import MyPage from './pages/MyPage';
import BoardList from './pages/BoardList';
import BoardDetail from './pages/BoardDetail';
import BoardCreate from './pages/BoardCreate';
import SignUp from './pages/SignUp';
import Tags from './pages/Tags';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout img />}>
        <Route path="/" element={<Main />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/article" element={<ArticleList />} />
        <Route path="/mypage" element={<MyPage />} />
      </Route>
      <Route element={<MainLayout bgWhite />}>
        <Route path="/board/detail" element={<BoardDetail />} />
      </Route>
      <Route element={<MainLayout bgColor />}>
        <Route path="/board/list" element={<BoardList />} />
        <Route path="/board/create" element={<BoardCreate />} />
        <Route path="/drinks/list" element={<DrinksList />} />
        <Route path="/drinks/detail" element={<DrinksDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tags" element={<Tags />} />
      </Route>
    </Routes>
  );
}

export default App;
