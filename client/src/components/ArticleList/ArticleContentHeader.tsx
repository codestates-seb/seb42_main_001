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
  width: 40px;
  height: 40px;
  display: flex;

  border: 1px solid var(--color-main);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--text-medium);
  font-weight: var(--weight-x-small);
`;

const ArticleContentTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--text-x-large);
  font-weight: var(--weight-large);
  padding-top: var(--x-large);
`;
