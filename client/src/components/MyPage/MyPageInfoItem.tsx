import styled from 'styled-components';

import customAxios from '../../api/customAxios';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { logoutSuccess } from '../../redux/slice/auth/authSlice';

interface InfoProps {
  editMode: boolean;
  setEditMode: (state: boolean) => void;
}

function MyPageInfoItem({ editMode, setEditMode }: InfoProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { displayName, aboutMe, profilePicture } = useAppSelector(
    state => state.auth.userInfo,
  );

  const handleUserTrueChange = () => {
    setEditMode(true);
  };

  const handleUserFalseChange = async () => {
    try {
      const res = await customAxios.patch('/members', {
        displayName,
        aboutMe,
        profilePicture,
      });
      if (res.status === 200) {
        setEditMode(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await customAxios.get(`/members/logout`);

      if (res.status === 200) {
        dispatch(logoutSuccess());
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        alert('로그아웃되었습니다');
        navigate('/');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteMember = async () => {
    const result = window.confirm('정말 탈퇴하시겠습니까?');

    if (result) {
      try {
        const res = await customAxios.delete('/members');

        if (res.status === 200) {
          dispatch(logoutSuccess());
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          alert('탈퇴되었습니다');
          navigate('/');
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <MainContainer>
      {editMode ? (
        <TrueItemContainer onClick={handleUserFalseChange}>
          수정 완료
        </TrueItemContainer>
      ) : (
        <>
          <ItemContainer onClick={handleUserTrueChange}>
            정보 수정
          </ItemContainer>
          <ItemContainer onClick={handleLogout}>로그아웃</ItemContainer>
          <ItemContainer onClick={handleDeleteMember}>회원 탈퇴</ItemContainer>
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
