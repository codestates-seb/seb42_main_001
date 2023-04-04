import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useAppSelector } from '../../../redux/hooks/hooks';
import defaultImg from '../../../assets/img/victor-hughes-OSLyizm8ovY-unsplash.jpg';

interface UserNavProps {
  profileColor?: string;
}

function UserNav({ profileColor }: UserNavProps) {
  const profilePicture = useAppSelector(
    state => state.auth.userInfo.profilePicture,
  );

  return (
    <UserContainer>
      <Link to="/mypage">
        <PorfileImg profileColor={profileColor}>
          <img
            src={profilePicture ? `${profilePicture}` : defaultImg}
            alt="profilePicture"></img>
        </PorfileImg>
      </Link>
    </UserContainer>
  );
}

export default UserNav;

const UserContainer = styled.div`
  width: 80px;
  display: flex;
  justify-content: end;

  @media only screen and (max-width: 768px) {
    width: 40px;
  }

  @media only screen and (max-width: 280px) {
    display: none;
  }
`;

const PorfileImg = styled.div<UserNavProps>`
  background-color: ${props =>
    props.profileColor ? `var(${props.profileColor})` : `var(--color-white)`};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--large);
  cursor: pointer;

  > img {
    width: 95%;
    height: 95%;
    border-radius: var(--3x-large);
  }
`;
