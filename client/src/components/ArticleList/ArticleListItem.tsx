import ArticleListCard from "./ArticleListCard";

interface ArticleListItemProps {
  onClick?: () => void;
}

function ArticleListItem({ onClick }: ArticleListItemProps) {
  return (
    <>
      <ArticleListCard onClick={onClick} text={"Whiskey"} />
      <ArticleListCard onClick={onClick} text={"Blended"} />
      <ArticleListCard onClick={onClick} text={"Bourbon"} />
      <ArticleListCard onClick={onClick} text={"Single Malt"} />
    </>
  );
}

export default ArticleListItem;
