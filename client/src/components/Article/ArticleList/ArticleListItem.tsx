import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import ArticleListCard from './ArticleListCard';

interface articleListItemType {
  articleId: number;
  aricleTitle: string;
}

function ArticleListItem() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const getArticleList = async () => {
      try {
        const res = await axios.get('/articles');
        if (res.status === 200) {
          setArticleList(res.data);
        }
      } catch (e) {
        console.error(e);
      }
    };

    getArticleList();
  }, []);

  return (
    <>
      {articleList.length
        ? articleList.map((ele: articleListItemType) => (
            <MarginContainer key={ele.articleId}>
              <Link to={`/article/detail/${ele.articleId}`}>
                <ArticleListCard text={ele.aricleTitle}></ArticleListCard>
              </Link>
            </MarginContainer>
          ))
        : null}
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
