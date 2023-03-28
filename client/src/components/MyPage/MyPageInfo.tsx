import { useState } from 'react';
import styled from 'styled-components';

import Card from '../UI/Card';
import MyPageInfoContent from './MyPageInfoContent';
import MyPageInfoItem from './MyPageInfoItem';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import {
  modifyDisplayName,
  modifyAboutMe,
} from '../../redux/slice/auth/authSlice';

function MyPageInfo() {
  const [editMode, setEditMode] = useState(false);
  const { displayName, aboutMe } = useAppSelector(state => state.auth.userInfo);
  const dispatch = useAppDispatch();

  const handleDisplayNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(modifyDisplayName(e.target.value));
  };

  const handleAboutMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(modifyAboutMe(e.target.value));
  };

  return (
    <MarginContainer>
      <Card>
        <MainContainer>
          <MyPageInfoContent
            editMode={editMode}
            handleDisplayNameChange={handleDisplayNameChange}
            handleAboutMeChange={handleAboutMeChange}
            displayName={displayName}
            aboutMe={aboutMe}
          />
          <MyPageInfoItem editMode={editMode} setEditMode={setEditMode} />
        </MainContainer>
      </Card>
    </MarginContainer>
  );
}

export default MyPageInfo;

const MarginContainer = styled.div`
  margin-top: var(--5x-large);
  margin-bottom: var(--large);
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: var(--x-large);
`;
