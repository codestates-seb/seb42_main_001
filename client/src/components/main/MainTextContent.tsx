import styled from 'styled-components';

import MainTextContentImg from './maintextcontent/MainTextContentImg';
import MainTextContentTitle from './maintextcontent/MainTextContentTitle';

function MainTextContent() {
  return (
    <MainContainer>
      <MainTextContentTitle />
      <MainTextContentImg />
    </MainContainer>
  );
}

export default MainTextContent;

const MainContainer = styled.div`
  max-width: 1420px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100vh;
  background-color: var(--color-sub-light-gray);

  @media only screen and (max-width: 1024px) {
  width: 80%;
    height: 100%;
    flex-direction: column;
    padding: var(--3x-large) 0;
  }

  @media only screen and (max-width: 768px) {
  width: 80%;
    height: 100%;
    padding: var(--3x-large) 0;
  }
`;
