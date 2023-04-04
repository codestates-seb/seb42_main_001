import styled from 'styled-components';

import Card from '../UI/Card';
import SignUpButton from './SignUpButton';
import SignUpFooter from './SignUpFooter';
import SignUpTitle from './SignUpTitle';

const SignUpContent = () => {
  return (
    <SizeContainer>
      <Card>
        <SignUpContentContainer>
          <SignUpTitle />
          <SignUpButton loginMode={'Google'} />
          <SignUpButton loginMode={'Guest'} />
          <SignUpFooter />
        </SignUpContentContainer>
      </Card>
    </SizeContainer>
  );
};

export default SignUpContent;

const SizeContainer = styled.div`
  width: 100%;
  max-width: 670px;
  min-width: 340px;
`;

const SignUpContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--3x-large) 0;
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
