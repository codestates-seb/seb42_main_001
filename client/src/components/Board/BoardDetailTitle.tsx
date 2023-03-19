import styled from "styled-components";

interface BoardDetailTitleProps {
  title?: string;
}

function BoardDetailTitle({ title }: BoardDetailTitleProps) {
  return <TitleContainer>{title}</TitleContainer>;
}

export default BoardDetailTitle;

const TitleContainer = styled.div`
  font-weight: var(--weight-large);
  font-size: var(--text-large);
`;
