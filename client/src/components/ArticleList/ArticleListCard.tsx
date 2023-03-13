import styled from "styled-components";
import Card from "../UI/Card";

interface ArticleListCardProps {
  onClick?: () => void;
  text?: string;
}

function ArticleListCard({ onClick, text }: ArticleListCardProps) {
  return (
    <Card>
      <CardChildContainer onClick={onClick}>{text}</CardChildContainer>
    </Card>
  );
}

export default ArticleListCard;

const CardChildContainer = styled.div`
  width: 670px;
  height: 345px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--text-large);
`;
