import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface UserNavProps {
  profileColor?: string;
}

function UserNav({ profileColor }: UserNavProps) {
  return (
    <UserContainer>
      <Link to="/mypage">
        <PorfileImg profileColor={profileColor} />
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
`;

const PorfileImg = styled.div<UserNavProps>`
  background-color: ${(props) =>
    props.profileColor ? `var(${props.profileColor})` : `var(--color-white)`};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--large);
  cursor: pointer;
`;
