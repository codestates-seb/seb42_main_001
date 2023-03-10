import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Main from './pages/Main';
import BoardList from './pages/BoardList';
import BoardDetail from './pages/BoardDetail';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/board/list" element={<BoardList></BoardList>}></Route>
        <Route
          path="/board/detail"
          element={<BoardDetail></BoardDetail>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
