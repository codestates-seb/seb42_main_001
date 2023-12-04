import styled from 'styled-components';
import { IBoardTag } from '../../util/interfaces/boards.interface';

function BoardTag({ tag }: IBoardTag) {
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
    padding: var(--3x-small);
    transition: 0.5s;
    white-space: nowrap;

    &:hover {
      transition: 0.5s;
      background-color: var(--color-main);
      color: var(--color-white);
      border: 1px solid var(--color-main);
    }
  }
`;
