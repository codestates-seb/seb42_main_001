import { Link } from "react-router-dom";
import styled from "styled-components";
import ArticleListCard from "./ArticleListCard";

interface ArticleListItemProps {
  onClick?: () => void;
}

function ArticleListItem({ onClick }: ArticleListItemProps) {
  return (
    <>
      <MarginContainer>
        <Link to={`/article/detail/articleId`}>
          <ArticleListCard onClick={onClick} text={"Whiskey"} />
        </Link>
      </MarginContainer>
      <MarginContainer>
        <ArticleListCard onClick={onClick} text={"Blended"} />
      </MarginContainer>
      <MarginContainer>
        <ArticleListCard onClick={onClick} text={"Bourbon"} />
      </MarginContainer>
      <MarginContainer>
        <ArticleListCard onClick={onClick} text={"Single Malt"} />
      </MarginContainer>
    </>
  );
}

export default ArticleListItem;

const MarginContainer = styled.div`
  margin-bottom: var(--2x-large);
  margin-left: var(--small);
  margin-right:  var(--small);

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
