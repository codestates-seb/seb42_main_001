import React from 'react';
import styled from 'styled-components';

interface props {
  content: string;
}

function ArticleDetailBody({ content }: props) {
  console.log(content);
  return (
    <MainContainer>
      {content.includes('http') ? (
        <img src={`${content}`} alt="drinkImg"></img>
      ) : (
        content
      )}
    </MainContainer>
  );
}

export default ArticleDetailBody;

const MainContainer = styled.div`
  color: var(--color-main);
  width: 100%;
  padding: var(--2x-large);
  font-size: var(--small);
  white-space: pre-wrap;
`;
