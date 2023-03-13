import styled from 'styled-components';

import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2';

function BoardComments() {
  return (
    <CommentsWrapper>
        <HiOutlineChatBubbleOvalLeft />
      <CommentsCount>10</CommentsCount>
    </CommentsWrapper>
  );
}

export default BoardComments;

const CommentsWrapper = styled.div`
  margin-right: var(--medium);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: 5px;
    color: var(--color-main);
    font-size: var(--medium);
  }
`;

const CommentsCount = styled.div`
  font-size: var(--x-small);
  font-weight: var(--weight-medium);
  color: var(--color-main);
`;
