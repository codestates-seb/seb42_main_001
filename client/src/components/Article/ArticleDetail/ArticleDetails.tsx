import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

import ArticleDetailContent from './ArticleDetailContent';
import ArticleDetailMenu from './ArticleDetailMenu';
import customAxios from '../../../api/customAxios';

function ArticleDetails() {
  const { articleType } = useParams();
  const [articleList, setArticleList] = useState<
    { articleId: number; articleTitle: string }[]
  >([]);
  const [articleId, setArticleId] = useState<number>(articleList[0]?.articleId);
  const [isActive, setIsActive] = useState<number>(articleId);

  useEffect(() => {
    const getArticleList = async () => {
      try {
        const res = await customAxios.get(`/articles?type=${articleType}`);
        if (res.status === 200) {
          setArticleList(res.data);
          setArticleId(res.data[0].articleId);
        }
      } catch (e) {
        console.error(e);
      }
    };

    getArticleList();
  }, [articleType]);

  const handleIdChange = (value: number) => {
    setArticleId(value);
    setIsActive(value);
  };

  return (
    <MainContainer>
      <FlexMenu>
        <ArticleDetailMenu
          handleIdChange={handleIdChange}
          articleList={articleList}
          isActive={isActive}
        />
      </FlexMenu>
      <FlexContent>
        <ArticleDetailContent articleId={articleId} />
      </FlexContent>
    </MainContainer>
  );
}

export default ArticleDetails;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--5x-large);

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-bottom: var(--5x-large);
  }
`;

const FlexMenu = styled.div`
  flex: 3;
  padding-right: var(--5x-large);

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const FlexContent = styled.div`
  flex: 7;
  display: flex;
`;
