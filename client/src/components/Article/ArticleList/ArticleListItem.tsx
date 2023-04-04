import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ArticleListCard from './ArticleListCard';

function ArticleListItem() {
  return (
    <>
      <MarginContainer>
        <Link to={`/article/detail/tutorial`}>
          <ArticleListCard text={'Tutorial'} />
        </Link>
      </MarginContainer>
      <MarginContainer>
        <Link to={`/article/detail/blended`}>
          <ArticleListCard text={'Blended'} />
        </Link>
      </MarginContainer>
      <MarginContainer>
        <Link to={`/article/detail/bourbon`}>
          <ArticleListCard text={'Bourbon'} />
        </Link>
      </MarginContainer>
      <MarginContainer>
        <Link to={`/article/detail/single`}>
          <ArticleListCard text={'Single Malt'} />
        </Link>
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
