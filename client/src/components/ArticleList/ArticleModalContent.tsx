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
  width: 1215px;
  height: 860px;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
`;
