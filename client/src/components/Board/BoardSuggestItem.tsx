import styled from "styled-components";

interface BoardSuggestItemProps {
  title: string;
}

function BoardSuggestItem({ title }: BoardSuggestItemProps) {
  return <ItemContainer>{title}</ItemContainer>;
}

export default BoardSuggestItem;

const ItemContainer = styled.li`
  font-weight: var(--weight-x-small);
  font-size: var(--text-medium);
  line-height: 40px;
`;
