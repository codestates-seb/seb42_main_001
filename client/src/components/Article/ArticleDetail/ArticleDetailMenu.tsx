import styled from 'styled-components';

import ArticleDetailMenuItem from './articledetailmenu/ArticleDetailMenuItem';

interface MenuProps {
  handleIdChange: (value: number) => void;
  articleList: Array<{
    articleId: number;
    articleTitle: string;
  }>;
  isActive: number;
}

function ArticleDetailMenu({ handleIdChange, articleList, isActive }: MenuProps) {
  return (
    <MainContainer>
      {articleList.length
        ? articleList.map(ele => (
          <ArticleDetailMenuItem
            key={ele.articleId}
            title={ele.articleTitle}
            handlIdChange={handleIdChange}
            value={ele.articleId}
            isActive={isActive}
          />
        ))
        : null}
    </MainContainer>
  );
}

export default ArticleDetailMenu;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
