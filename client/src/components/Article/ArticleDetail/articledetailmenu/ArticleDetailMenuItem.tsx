import styled from 'styled-components';
import Card from '../../../UI/Card';

interface MenuItemProps {
  title: string;
  value: number;
  handlIdChange: (value: number) => void;
}

function ArticleDetailMenuItem({ title, value, handlIdChange }: MenuItemProps) {
  return (
    <MainContainer>
      <Card>
        <SizeContainer onClick={() => handlIdChange(value)}>
          {title}
        </SizeContainer>
      </Card>
    </MainContainer>
  );
}

export default ArticleDetailMenuItem;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: var(--small);
  color: var(--color-main);
  opacity: 0.6;
  font-weight: var(--weight-small);
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: 0.4s;
  }
  &:active {
    opacity: 1;
    transition: 0.4s;
  }
`;

const SizeContainer = styled.button`
  cursor: pointer;
  width: 100%;
  display: flex;
  border: 0;
  background-color: transparent;
  padding: var(--medium);
`;
