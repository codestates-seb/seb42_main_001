import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';

const SignUpButton = () => {
  const handleLogin = () => {
    window.location.assign(
      `${process.env.REACT_APP_BASE_URL}/oauth2/authorization/google`,
    );
  };

  return (
    <SignUpButtonContainer onClick={handleLogin}>
      <FcGoogle size="50" />
      Google로 시작하기
    </SignUpButtonContainer>
  );
};

export default SignUpButton;

const SignUpButtonContainer = styled.button`
  width: 80%;
  height: 90px;
  background-color: var(--color-white);
  border: 1px solid var(--color-sub-gray);
  border-radius: var(--2x-small);
  margin-bottom: 150px;
  display: flex;
  align-items: center;
  font-size: var(--small);
  font-weight: var(--weight-large);
  cursor: pointer;
  > svg {
    margin-left: var(--medium);
    margin-right: 140px;
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
