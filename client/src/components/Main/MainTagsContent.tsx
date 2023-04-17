import styled from 'styled-components';
import MainTagsContentImg from './maintagscontent/MainTagsContentImg';
import MainTagsContentTags from './maintagscontent/MainTagsContentTags';

function MainTagsContent() {
  return (
    <MainContainer>
      <MainTagsContentTags />
      <MainTagsContentImg />
    </MainContainer>
  );
}

export default MainTagsContent;

const MainContainer = styled.div`
  max-width: 1420px;
  width: 85%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-sub-light-gray);

  @media only screen and (max-width: 1024px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: var(--3x-large) 0;
  }

  @media only screen and (max-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: var(--3x-large) 0;
    
  }
`;
