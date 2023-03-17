import styled from "styled-components";
import Card from "../../UI/Card";

interface ArticleListCardProps {
  onClick?: () => void;
  text?: string;
}

function ArticleListCard({ onClick, text }: ArticleListCardProps) {
  return (
    <MainContainer>
      <Card>
        <CardChildContainer onClick={onClick}>{text}</CardChildContainer>
      </Card>
    </MainContainer>
  );
}

export default ArticleListCard;

const MainContainer = styled.div`
  width: 100%;
`

const CardChildContainer = styled.div`
  width: 600px;
  height: 345px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-main);
  font-size: var(--text-medium);

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

