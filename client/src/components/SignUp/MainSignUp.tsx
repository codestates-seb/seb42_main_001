import styled from "styled-components";
import SignUpContent from "./SignUpContent";

const MainSignUp = () => {
  return (
    <SignUpContainer>
      <SignUpContent />
    </SignUpContainer>
  );
};

export default MainSignUp;

const SignUpContainer = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
