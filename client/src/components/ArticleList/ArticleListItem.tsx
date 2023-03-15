import styled from "styled-components";
import ArticleListCard from "./ArticleListCard";

interface ArticleListItemProps {
  onClick?: () => void;
}

function ArticleListItem({ onClick }: ArticleListItemProps) {
  return (
    <>
      <MarginContainer>
        <ArticleListCard onClick={onClick} text={"Whiskey"} />
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
  margin-bottom: var(--xx-large);
`;