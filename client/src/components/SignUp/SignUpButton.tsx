import styled from 'styled-components';

import { FcGoogle } from 'react-icons/fc';
import { FaUserCircle } from 'react-icons/fa';

interface props {
  loginMode: string;
}

const SignUpButton = ({ loginMode }: props) => {
  const handleLogin = () => {
    loginMode === 'Google'
      ? window.location.assign(
          `${process.env.REACT_APP_BASE_URL}/oauth2/authorization/google`,
        )
      : window.location.assign(
          `${process.env.REACT_APP_BASE_URL}/members/guest/login`,
        );
  };

  return (
    <SignUpButtonContainer onClick={handleLogin}>
      {loginMode === 'Google' ? (
        <FcGoogle size="40" />
      ) : (
        <FaUserCircle size="40" />
      )}
      {`${loginMode}로 시작하기`}
    </SignUpButtonContainer>
  );
};

export default SignUpButton;

const SignUpButtonContainer = styled.button`
  width: 80%;
  height: 90px;
  margin: var(--x-large) 0;
  background-color: var(--color-white);
  border: 1px solid var(--color-sub-gray);
  border-radius: var(--2x-small);
  display: flex;
  align-items: center;
  font-size: var(--text-medium);
  font-weight: var(--weight-large);
  cursor: pointer;
  transition: 0.4s;

  > svg {
    margin-left: var(--medium);
    margin-right: 140px;
  }

  &:hover {
    transition: 0.4s;
    box-shadow: 0px 0px 20px #473f3f73;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: var(--2x-small);
    }
  }
`;
