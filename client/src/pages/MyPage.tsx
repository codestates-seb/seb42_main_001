import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import MyContent from '../components/Mypage/MyContent';
import MyPageEdit from '../components/Mypage/MyPageEdit';
import MyPageInfo from '../components/Mypage/MyPageInfo';
import { useAppDispatch } from '../redux/hooks/hooks';
import { loginSuccess } from '../redux/slice/auth/authSlice';

function Mypage() {
  const [isEdit, setEdit] = useState(false);
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

  const handleMyPageEdit = () => {
    setEdit(!isEdit);
  };

  return (
    <MypageContainer>
      {isEdit ? (
        <MarginWarpper>
          <MyPageEdit isEdit={isEdit} onClick={handleMyPageEdit} />
        </MarginWarpper>
      ) : (
        <MarginWarpper>
          <MyPageInfo isEdit={isEdit} onClick={handleMyPageEdit} />
        </MarginWarpper>
      )}
      <MyContent />
    </MypageContainer>
  );
}

export default Mypage;

const MypageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 130px 0;
  background-color: var(--color-main);
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const MarginWarpper = styled.div`
  width: 100%;
  max-width: 500px;
  margin-right: var(--medium);
  display: flex;
  justify-content: center;
  align-items: top;

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;
