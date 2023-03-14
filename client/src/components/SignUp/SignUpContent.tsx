import styled from "styled-components";

import Card from "../UI/Card";
import SignUpButton from "./SignUpButton";
import SignUpFooter from "./SignUpFooter";
import SignUpTitle from "./SignUpTitle";

const SignUpContent = () => {
  return (
    <Card>
      <SignUpContentContainer>
        <SignUpTitle />
        <SignUpButton />
        <SignUpFooter />
      </SignUpContentContainer>
    </Card>
  );
};

export default SignUpContent;

const SignUpContentContainer = styled.div`
  width: 670px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
