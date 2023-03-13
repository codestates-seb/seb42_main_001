import ArticleModal from "./ArticleModal";

interface ArticleModalItemProps {
  modal?: any;
  onClick?: () => void;
}

function ArticleModalItem({ modal, onClick }: ArticleModalItemProps) {
  return <>{modal.whiskey ? <ArticleModal onClick={onClick} /> : null}</>;
}

export default ArticleModalItem;
