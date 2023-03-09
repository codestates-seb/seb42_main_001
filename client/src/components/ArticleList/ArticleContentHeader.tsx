import styled from "styled-components";

function ArticleContentHeader() {
  return (
    <ArticleContentHeaderContainer>
      <ArticleContentNumber>1</ArticleContentNumber>
      <ArticleContentTitle>위스키란 무엇일까요?</ArticleContentTitle>
    </ArticleContentHeaderContainer>
  );
}

export default ArticleContentHeader;

const ArticleContentHeaderContainer = styled.div`
  flex: 1 0;
  border-bottom: 1px dotted var(--color-sub-dark-gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ArticleContentNumber = styled.div`
  width: 45px;
  height: 45px;
  border: 3px solid var(--color-main);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--text-large);
  font-weight: 600;
`;

const ArticleContentTitle = styled.div`
  font-size: var(--text-x-large);
  font-weight: 600;
  padding-top: 40px;
`;
