import styled from "styled-components";

interface BoardDetailContentsProps {
  content?: string;
}

function BoardDetailContents({ content }: BoardDetailContentsProps) {
  return <ContentsContainer>{content}</ContentsContainer>;
}

export default BoardDetailContents;

const ContentsContainer = styled.div`
  font-size: var(--text-medium);
  line-height: var(--large);
  margin-bottom: var(--4x-large);
`;
