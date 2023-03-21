import styled from 'styled-components';
import { useNavigate } from 'react-router';
import axios from 'axios';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { logoutSuccess } from '../../redux/slice/auth/authSlice';
import MyPageButton from './MyPageButton';

interface MyPageInfoButtonsProps {
  onClick?: () => void;
}

const MyPageInfoButtons = ({ onClick }: MyPageInfoButtonsProps) => {
  const { token } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.get(`${process.env.REACT_APP_BASE_URL}/members/logout`, {
      headers: {
        Authorization: token?.accessToken,
        Refresh: token?.refreshToken,
      },
    });
    await dispatch(logoutSuccess());
    await navigate('/');
  };

  return (
    <MyPageInfoButtonContainer>
      <MyPageButton onClick={onClick}>회원 정보 수정</MyPageButton>
      <MyPageButton onClick={handleLogout}>로그아웃</MyPageButton>
      <MyPageButton>회원 탈퇴</MyPageButton>
    </MyPageInfoButtonContainer>
  );
};

export default MyPageInfoButtons;

const MyPageInfoButtonContainer = styled.div`
  width: 95%;
  max-width: 450px;
  height: 200px;
  margin-top: var(--xx-large);
  margin-bottom: var(--x-large);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
