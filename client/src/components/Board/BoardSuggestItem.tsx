import styled from 'styled-components';

function BoardSuggestItem() {
  return <ItemContainer>잭콕 취향이신 분 계실까요?</ItemContainer>;
}

export default BoardSuggestItem;

const ItemContainer = styled.li`
  font-weight: var(--weight-x-small);
  font-size: var(--text-medium);
  line-height: 40px;
`;
