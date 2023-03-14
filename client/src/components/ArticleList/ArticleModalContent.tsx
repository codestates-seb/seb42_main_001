import styled from "styled-components";

import ArticleContentHeader from "./ArticleContentHeader";
import ArticleContentBody from "./ArticleContentBody";

function ArticleModalContent() {
  return (
    <ArticleContentContainer>
      <ArticleContentHeader />
      <ArticleContentBody />
    </ArticleContentContainer>
  );
}

export default ArticleModalContent;

const ArticleContentContainer = styled.div`
  width: 1220px;
  height: 100%;
  min-height: 1000px;
  padding: 0 150px;
  display: flex;
  flex-direction: column;
`;
