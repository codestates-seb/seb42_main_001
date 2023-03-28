import React from 'react';
import styled from 'styled-components';

interface props {
  title: string;
}

function ArticleDetailTitle({ title }: props) {
  return <MainContainer>
    <div>
      {title}
    </div>
  </MainContainer>;
}

export default ArticleDetailTitle;

const MainContainer = styled.div`
  color: var(--color-main);
  width: 100%;
  padding: var(--2x-large) var(--2x-large) 0 var(--2x-large);
  font-size: var(--x-large);
  font-weight: var(--weight-medium);

  div {
    border-bottom: 1px solid var(--color-sub-light-gray);
    padding-bottom: var(--medium);
  }
`;
