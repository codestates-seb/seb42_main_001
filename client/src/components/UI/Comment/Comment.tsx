import styled from 'styled-components';
import { useState } from 'react';

import Card from '../Card';
import CommentModal from './CommentModal';
import More from '../More';

function Comment() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => setIsOpen(!isOpen);

  return (
    <MainContainer>
      <Card>
        <SubContainer>
          <CommentAuthorInfo>
            <CommentAuthorInfoImg></CommentAuthorInfoImg>
            <CommentAuthorContents>
              <h4>lapmu</h4>
              <span>23.03.07</span>
            </CommentAuthorContents>
            <div>
              <More handleModalOpen={handleModalOpen} />
            </div>
            {isOpen ? <CommentModal /> : null}
          </CommentAuthorInfo>
          <CommentContents>댓글 내용</CommentContents>
        </SubContainer>
      </Card>
    </MainContainer>
  );
}
export default Comment;

const MainContainer = styled.div`
  width: 100%;
  margin-bottom: var(--medium);
`;

const SubContainer = styled.div`
  width: 100%;
  padding: var(--large);
`;

const CommentAuthorInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-size: var(--text-small);
  position: relative;

  span {
    margin-top: 4px;
    font-size: var(--text-small);
  }
`;

const CommentAuthorInfoImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: var(--large);
  background-color: var(--color-sub-light-gray);
`;

const CommentAuthorContents = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: var(--x-small);
`;

const CommentContents = styled.div`
  width: 100%;
  height: 100%;
  padding-top: var(--medium);
  padding-left: var(--xxx-small);
`;
