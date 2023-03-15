import styled from "styled-components";

import Card from "../UI/Card";
import SignUpButton from "./SignUpButton";
import SignUpFooter from "./SignUpFooter";
import SignUpTitle from "./SignUpTitle";

const SignUpContent = () => {
  return (
    <SizeContainer>
      <Card>
        <SignUpContentContainer>
          <SignUpTitle />
          <SignUpButton />
          <SignUpFooter />
        </SignUpContentContainer>
      </Card>
    </SizeContainer>
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

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 670px;
    min-width: 340px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SizeContainer = styled.div`
  width: 100%;
  max-width: 670px;
  min-width: 340px;
`;
