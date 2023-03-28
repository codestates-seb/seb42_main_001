import styled from 'styled-components';
import { useRef } from 'react';
import axios from 'axios';

import { RiImageAddLine } from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import {
  modifyDisplayName,
  modifyAboutMe,
  modifyProfilePicture,
} from '../../redux/slice/auth/authSlice';
import defaultImg from '../../assets/img/brandon-green-21jzeYnvZTY-unsplash.jpg';

interface InfoProps {
  editMode: boolean;
}

function MyPageInfoContent({ editMode }: InfoProps) {
  const { displayName, aboutMe, profilePicture } = useAppSelector(
    state => state.auth.userInfo,
  );
  const fileInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleDisplayNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(modifyDisplayName(e.target.value));
  };

  const handleAboutMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(modifyAboutMe(e.target.value));
  };

  const handleProfilePictureChange = async () => {
    try {
      const curfiles: any = fileInput.current?.files;
      const formData = new FormData();
      formData.append('file', curfiles['0']);

      const res = await axios.post('/spring/upload', formData);

      if (res.status === 200) {
        const imgUrl = res.data[0].boardImageUrl;
        dispatch(modifyProfilePicture(imgUrl));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <MainContainer>
      <ImgContainer>
        {editMode ? (
          <>
            <label htmlFor="image_upload">
              <img
                src={profilePicture ? `${profilePicture}` : defaultImg}
                alt="profilePicture"
              />
              <IconWrapper>
                <RiImageAddLine></RiImageAddLine>
              </IconWrapper>
            </label>
            <input
              type="file"
              id="image_upload"
              accept="image/*"
              ref={fileInput}
              onChange={handleProfilePictureChange}
            />
          </>
        ) : (
          <img
            src={profilePicture ? `${profilePicture}` : defaultImg}
            alt="profilePicture"></img>
        )}
      </ImgContainer>
      <TextContainer>
        {editMode ? (
          <>
            <TextEditContainer
              value={displayName}
              onChange={handleDisplayNameChange}
            />
            <TextEditContainer value={aboutMe} onChange={handleAboutMeChange} />
          </>
        ) : (
          <>
            <Name>{displayName}</Name>
            <Text>{aboutMe || '🥃 자기소개를 입력해 주세요 🍹'}</Text>
          </>
        )}
      </TextContainer>
    </MainContainer>
  );
}

export default MyPageInfoContent;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 160px;
  height: 160px;
  background-color: var(--color-sub-light-gray);
  border-radius: var(--3x-large);
  cursor: pointer;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;

  > label {
    width: 100%;
    height: 100%;
    border-radius: var(--3x-large);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
  }

  input {
    display: none;
  }

  > svg,
  img {
    width: 90%;
    height: 90%;
    border-radius: var(--3x-large);
  }

  &:hover {
    transition: 0.5s;
    background-color: var(--color-sub-gray);
  }
`;

const IconWrapper = styled.div`
  position: absolute;

  > svg {
    width: 30px;
    height: 30px;
  }
`;

const Name = styled.div`
  width: 100%;
  height: var(--large);
  font-size: var(--text-medium);
`;

const Text = styled.div`
  width: 100%;
  font-weight: var(--weight-medium);
  font-size: var(--text-large);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: var(--large);
`;

const TextEditContainer = styled.input`
  width: calc(var(--4x-large) * 3);
  height: calc(var(--2x-small) * 5);
  border: 1px solid var(--color-sub-light-gray);
  border-radius: var(--2x-small);
  margin-bottom: var(--2x-small);
  padding-left: var(--small);
`;
