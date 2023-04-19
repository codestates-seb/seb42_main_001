import styled from 'styled-components';

import ArticleListItem from '../components/article/articleList/ArticleListItem';

function ArticleList() {
  return (
    <ArticleListContainer>
      <ArticleListCardContainer>
        <ArticleListItem />
      </ArticleListCardContainer>
    </ArticleListContainer>
  );
}

export default ArticleList;

const ArticleListContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 150px 0;
  background-color: var(--color-main);

  @media only screen and (max-width: 768px) {
    padding: var(--4x-large) 0;
    height: auto;
  }
`;

const ArticleListCardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 200px;

  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;
