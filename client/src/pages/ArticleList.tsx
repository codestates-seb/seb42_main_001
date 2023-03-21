import { useState } from "react";
import styled from "styled-components";
import ArticleListItem from "../components/Article/ArticleList/ArticleListItem";

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
      <ArticleListCardContainer>
        <ArticleListItem onClick={handleWhiskeyModal} />
      </ArticleListCardContainer>
    </ArticleListContauner>
  );
}

export default ArticleList;

const ArticleListContauner = styled.div`
  width: 100%;
  height: 100vh;
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

  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;
