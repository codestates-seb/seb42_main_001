import styled from 'styled-components';

import { FaRegCommentAlt } from 'react-icons/fa';

function BoardComments() {
  return (
    <CommentsWrapper>
      <IconWrapper>
        <FaRegCommentAlt></FaRegCommentAlt>
      </IconWrapper>
      <CommentsCount>10</CommentsCount>
    </CommentsWrapper>
  );
}

export default BoardComments;

const CommentsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-right: 5px;
  width: 20px;
  height: 20px;
  color: var(--color-main);
`;

const CommentsCount = styled.div`
  font-size: var(--small-font-size);
  font-weight: 600;
  color: var(--color-main);
`;
