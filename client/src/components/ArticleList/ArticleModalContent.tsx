import styled from "styled-components";

import ArticleContentHeader from "./ArticleContentHeader";
import ArticleContentBody from "./ArticleContentBody";
import React from "react";

function ArticleModalContent() {
  const HandleStopPropagation = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <ArticleContentContainer onClick={HandleStopPropagation}>
      <ArticleContentHeader />
      <ArticleContentBody />
    </ArticleContentContainer>
  );
}

export default ArticleModalContent;

const ArticleContentContainer = styled.div`
  height: 100%;
  min-width: 800px;
  padding: var(--3x-large);
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-height: 600px;
    min-height: 0;
    min-width: 270px;
    padding: 50px;
    margin: none;
    overflow: scroll;
  }
`;
