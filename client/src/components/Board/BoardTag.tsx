import styled from "styled-components";

interface BoardTagProps {
  tag: string;
}

function BoardTag({ tag }: BoardTagProps) {
  return (
    <TagWrapper>
      <div>{tag}</div>
    </TagWrapper>
  );
}

export default BoardTag;

const TagWrapper = styled.div`
  display: flex;
  cursor: pointer;

  div {
    color: var(--color-sub-dark-gray);
    font-size: var(--text-x-small);
    border: 1px solid var(--color-sub-dark-gray);
    border-radius: var(--medium);
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--xx-small);
  }
`;
