import styled from "styled-components";
import { useState } from "react";
import Card from "../Card";
import CommentModal from "./CommentModal";
import More from "../More";

interface CommentProps {
  comments?: {
    commentId: number;
    memberId: number;
    displayName: string;
    commentContent: string;
    createAt: string;
  };
}

function Comment({ comments }: CommentProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => setIsOpen(!isOpen);

  return (
    <MainContainer>
      <Card>
        <SubContainer>
          <CommentAuthorInfo>
            <CommentAuthorInfoImg></CommentAuthorInfoImg>
            <CommentAuthorContents>
              <h4>{comments?.displayName}</h4>
              <span>{comments?.createAt}</span>
            </CommentAuthorContents>
            <div>
              <More handleModalOpen={handleModalOpen} />
            </div>
            {isOpen ? <CommentModal /> : null}
          </CommentAuthorInfo>
          <CommentContents>{comments?.commentContent}</CommentContents>
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

  span {
    color: var(--color-sub-gray);
  }
`;

const CommentContents = styled.div`
  width: 100%;
  height: 100%;
  padding-top: var(--medium);
  padding-left: var(--xxx-small);
`;
