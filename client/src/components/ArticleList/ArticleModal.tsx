import styled from "styled-components";

import Card from "../UI/Card";
import ArticleModalContent from "./ArticleModalContent";

interface ArticleModalPorps {
  onClick?: () => void;
}

function ArticleModal({ onClick }: ArticleModalPorps) {
  return (
    <ArticleModalContainer onClick={onClick}>
      <ArticleModalArrowButton>{"<"}</ArticleModalArrowButton>
      <Card>
        <ArticleModalContent></ArticleModalContent>
      </Card>
      <ArticleModalArrowButton>{">"}</ArticleModalArrowButton>
    </ArticleModalContainer>
  );
}

export default ArticleModal;

const ArticleModalContainer = styled.div`
  position: absolute;
  top: 65px;
  left: 0;
  width: 101%;
  height: 97%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArticleModalArrowButton = styled.div`
  margin: 0 var(--xxx-large);
  font-size: var(--xxx-large);
  color: var(--color-white);
`;
