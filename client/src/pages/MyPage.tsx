import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';

import MyPageContent from '../components/MyPage/MyPageContent';
import MyPageInfo from '../components/MyPage/MyPageInfo';
import { useAppDispatch } from '../redux/hooks/hooks';
import { loginSuccess } from '../redux/slice/auth/authSlice';

function MyPage() {
  // const [isEdit, setEdit] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const url = new URL(window.location.href);
    const token = {
      accessToken: `Bearer ${url.searchParams.get('Authorization')}`,
      refreshToken: `${url.searchParams.get('Refresh')}`,
    };
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/members/mypage`, {
        headers: {
          Authorization: token.accessToken,
          Refresh: token.refreshToken,
        },
      })
      .then(res => {
        const userInfo = res.data;
        dispatch(loginSuccess({ userInfo, token }));
      });
  }, [dispatch]);

  // const handleMyPageEdit = () => {
  //   setEdit(!isEdit);
  // };

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
