import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';

import MyPageContent from '../components/Mypage/MyPageContent';
import MyPageInfo from '../components/Mypage/MyPageInfo';
import { useAppDispatch } from '../redux/hooks/hooks';
import { loginSuccess } from '../redux/slice/auth/authSlice';

function MyPage() {
  const dispatch = useAppDispatch();

  const handleLoginProcess = async () => {
    try {
      const url = new URL(window.location.href);
      const token = {
        accessToken: `Bearer ${url.searchParams.get('Authorization')}`,
        refreshToken: `${url.searchParams.get('Refresh')}`,
      };
      const res = await axios.get(`/members/mypage`, {
        headers: {
          Authorization: token.accessToken,
          Refresh: token.refreshToken,
        },
      });
      if (res.status === 200) {
        const userInfo = res.data;
        dispatch(loginSuccess({ userInfo: userInfo }));
        localStorage.clear();
        localStorage.setItem('accessToken', token.accessToken);
        localStorage.setItem('refreshToken', token.refreshToken);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    handleLoginProcess();
  });

  return (
    <MainContainer>
      <MyPageInfo />
      <MyPageContent />
    </MainContainer>
  );
}

export default MyPage;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-main);
`;
