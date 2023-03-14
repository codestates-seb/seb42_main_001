import { useState } from "react";
import styled from "styled-components";

import ArticleListItem from "../components/ArticleList/ArticleListItem";
import ArticleModalItem from "../components/ArticleList/ArticleModalItem";

function ArticleList() {
  const [isModal, setModal] = useState({
    whiskey: false,
    blended: false,
    bourbon: false,
    singleMalt: false,
  });

  const handleWhiskeyModal = () => {
    const copy = { ...isModal };
    copy.whiskey = !copy.whiskey;
    setModal(copy);
  };

  return (
    <ArticleListContauner>
      <ArticleModalItem modal={isModal} onClick={handleWhiskeyModal} />
      <ArticleListCardContainer>
        <ArticleListItem onClick={handleWhiskeyModal} />
      </ArticleListCardContainer>
    </ArticleListContauner>
  );
}

export default ArticleList;

const ArticleListContauner = styled.div`
  width: 100%;
  height: 100%;
  padding: 150px 0;
  background-color: var(--color-main);
`;

const ArticleListCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  height: 100%;
`;
