import React from 'react';
import styled from 'styled-components';

interface props {
  content: string;
}

function ArticleDetailBody({ content }: props) {
  return <MainContainer>{content}</MainContainer>;
}

export default ArticleDetailBody;

const MainContainer = styled.div`
  color: var(--color-main);
  width: 100%;
  padding: var(--2x-large);
  font-size: var(--small);
  white-space: pre-wrap;
`;
