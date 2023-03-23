import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ArticleListCard from './ArticleListCard';

function ArticleListItem() {
  return (
    <>
      <MarginContainer>
        <Link to={`/article/detail/articleId`}>
          <ArticleListCard text={'Whiskey'} />
        </Link>
      </MarginContainer>
      <MarginContainer>
        <ArticleListCard text={'Blended'} />
      </MarginContainer>
      <MarginContainer>
        <ArticleListCard text={'Bourbon'} />
      </MarginContainer>
      <MarginContainer>
        <ArticleListCard text={'Single Malt'} />
      </MarginContainer>
    </>
  );
}

export default ArticleListItem;

const MarginContainer = styled.div`
  margin-bottom: var(--2x-large);
  margin-left: var(--small);
  margin-right: var(--small);

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
