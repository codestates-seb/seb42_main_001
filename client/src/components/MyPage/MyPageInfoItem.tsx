import styled from 'styled-components';
import axios from 'axios';

import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { logoutSuccess } from '../../redux/slice/auth/authSlice';

interface InfoProps {
  userInfo: boolean;
  setUserInfo: (state: boolean) => void;
}

function MyPageInfoItem({ userInfo, setUserInfo }: InfoProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleUserTrueChange = () => {
    setUserInfo(true);
  };

  const handleUserFalseChange = () => {
    setUserInfo(false);
  };

  const handleLogout = async () => {
    try {
      const res = await axios.get(`/members/logout`);
      if (res.status === 200) {
        dispatch(logoutSuccess());
        localStorage.clear();
        alert('로그아웃 되었습니다');
        navigate('/');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <MainContainer>
      {userInfo ? (
        <TrueItemContainer onClick={handleUserFalseChange}>
          수정 완료
        </TrueItemContainer>
      ) : (
        <>
          <ItemContainer onClick={handleUserTrueChange}>
            정보 수정
          </ItemContainer>
          <ItemContainer onClick={handleLogout}>로그아웃</ItemContainer>
          <ItemContainer>회원 탈퇴</ItemContainer>
        </>
      )}
    </MainContainer>
  );
}

export default MyPageInfoItem;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ItemContainer = styled.button`
  width: 100px;
  height: 100px;
  border: none;
  outline: none;
  border-radius: var(--2x-large);
  border: 0.5px solid var(--color-sub-gray);
  font-size: var(--x-small);
  background-color: var(--color-white);
  color: var(--color-sub-gray);
  margin-left: var(--x-small);
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    color: var(--color-main);
    border: 1px solid var(--color-main);
  }
`;

const TrueItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: none;
  outline: none;
  border-radius: var(--2x-large);
  border: 1px solid var(--color-main);
  font-size: var(--x-small);
  background-color: var(--color-main);
  color: var(--color-white);
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    color: var(--color-main);
    background-color: var(--color-whute);
    border: 1px solid var(--color-main);
  }
`;
