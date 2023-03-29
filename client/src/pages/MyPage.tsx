import { useEffect } from 'react';
import styled from 'styled-components';
import { useSearchParams, useNavigate } from 'react-router-dom';

import MyPageContent from '../components/MyPage/MyPageContent';
import MyPageInfo from '../components/MyPage/MyPageInfo';
import { useAppDispatch } from '../redux/hooks/hooks';
import { loginSuccess } from '../redux/slice/auth/authSlice';
import customAxios from '../api/customAxios';

function MyPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchParams.get('Authorization')) {
      const handleLoginProcess = async () => {
        try {
          const token = {
            accessToken: `Bearer ${searchParams.get('Authorization')}`,
            refreshToken: `${searchParams.get('Refresh')}`,
          };

          localStorage.setItem('accessToken', token.accessToken);
          localStorage.setItem('refreshToken', token.refreshToken);

          const res = await customAxios.get('/members/mypage');

          dispatch(loginSuccess({ userInfo: res.data }));
          navigate('/mypage');
        } catch (e) {
          console.error(e);
        }
      };

      handleLoginProcess();
    }
  }, [dispatch, navigate, searchParams]);

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
