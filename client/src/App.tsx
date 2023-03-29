import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useAppDispatch } from './redux/hooks/hooks';

import Main from './pages/Main';
import MainLayout from './components/layout/MainLayout';
import BaseLayout from './components/layout/BaseLayout';
import DrinksList from './pages/DrinksList';
import DrinksDetail from './pages/DrinksDetail';
import ArticleList from './pages/ArticleList';
import MyPage from './pages/MyPage';
import BoardList from './pages/BoardList';
import BoardDetail from './pages/BoardDetail';
import BoardCreate from './pages/BoardCreate';
import SignUp from './pages/SignUp';
import Tags from './pages/Tags';
import ArticleDetail from './pages/ArticleDetail';
import { loginSuccess } from './redux/slice/auth/authSlice';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common['Authorization'] =
  localStorage.getItem('accessToken');
axios.defaults.headers.common['Refresh'] = localStorage.getItem('refreshToken');

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initializeUserInfo = async () => {
      try {
        const res = await axios.get(`/members/mypage`);
        if (res.status === 200) {
          const userInfo = res.data;
          dispatch(loginSuccess({ userInfo: userInfo }));
          console.log('confirm app rerender');
        }
      } catch (e) {
        console.error(e);
      }
    };
    initializeUserInfo();
  });

  return (
    <Routes>
      {/* <Route element={<MainLayout img />}> */}
      <Route path='/' element={<Main />} />
      {/* </Route> */}
      <Route element={<MainLayout bgColor />}>
        <Route path="/board/create" element={<BoardCreate />} />
        <Route path="/board/edit/:editId" element={<BoardCreate />} />
        <Route path="/drinks/list" element={<DrinksList />} />
        <Route path="/drinks/:drinkId" element={<DrinksDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tags/:tagid" element={<Tags />} />
      </Route>
      <Route element={<BaseLayout />}>
        <Route path="/article" element={<ArticleList />} />
        <Route
          path="/article/detail/:articleType"
          element={<ArticleDetail />}
        />
        <Route path="/mypage" element={<MyPage />} />
      </Route>
      <Route element={<BaseLayout bgColor />}>
        <Route path="/board/list" element={<BoardList />} />
        <Route path="/board/detail/:boardId" element={<BoardDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
