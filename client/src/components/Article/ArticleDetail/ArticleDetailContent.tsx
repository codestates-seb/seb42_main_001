import { useEffect, useState } from 'react';
import ArticleDetailBody from './articledetailcontent/ArticleDetailBody';
import ArticleDetailTitle from './articledetailcontent/ArticleDetailTitle';
import styled from 'styled-components';
import Card from '../../UI/Card';
import axios from 'axios';

interface props {
  articleId: number | undefined;
}

function ArticleDetailContent({ articleId }: props) {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    if (articleId) {
      const getArticleData = async () => {
        try {
          const res = await axios.get(`/articles/${articleId}`);
          if (res.status === 200) {
            setArticleData(res.data.sectionList);
          }
        } catch (e) {
          console.error(e);
        }
      };

      getArticleData();
    }
  }, [articleId]);

  return (
    <MainContainer>
      <Card>
        <SizeContainer>
          {articleData.length
            ? articleData.map(
              (
                ele: { sectionTitle: string; sectionContent: string },
                idx,
              ) => (
                <div key={idx}>
                  <ArticleDetailTitle
                    title={ele.sectionTitle}></ArticleDetailTitle>
                  <ArticleDetailBody
                    content={ele.sectionContent}></ArticleDetailBody>
                </div>
              ),
            )
            : null}
        </SizeContainer>
      </Card>
    </MainContainer>
  );
}

export default ArticleDetailContent;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SizeContainer = styled.div`
  width: 100%;
  height: 100%;
`;
