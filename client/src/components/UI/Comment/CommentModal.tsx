import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router";

import Card from "../Card";

interface CommentProps {
  drinkCommentId?: number;
  boardCommentId?: number;
  boardId?: number;
  onClick: (state: boolean) => void;
  handleModalOpen: (state: boolean) => void;
}

function CommentModal({
  drinkCommentId,
  boardCommentId,
  boardId,
  onClick,
  handleModalOpen,
}: CommentProps) {
  const navigate = useNavigate();

  const handleDrinksCommentDelte = async () => {
    try {
      await axios.delete(`/comments/drinks/${drinkCommentId}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleBoardCommentDelte = async () => {
    try {
      await axios.delete(`/comments/boards/${boardCommentId}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleBoardDelte = async () => {
    try {
      await axios.delete(`/boards/${boardId}`);
      navigate("/board/list");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentDelete = () => {
    if (drinkCommentId || boardCommentId) {
      if (window.confirm("댓글을 삭제하시겠습니까?")) {
        if (drinkCommentId) {
          handleDrinksCommentDelte();
        } else if (boardCommentId) {
          handleBoardCommentDelte();
        }
      }
    } else if (boardId) {
      if (window.confirm("글을 삭제하시겠습니까?")) {
        handleBoardDelte();
      }
    }
  };

  const handleCommentEdit = () => {
    handleModalOpen(false);
    onClick(true);
  };

  return (
    <ModalContainer>
      <Card>
        <EditContainer onClick={handleCommentEdit}>Edit</EditContainer>
        <DeleteContainer onClick={handleCommentDelete}>Delete</DeleteContainer>
      </Card>
    </ModalContainer>
  );
}

export default CommentModal;

const ModalContainer = styled.div`
  width: 100px;
  height: auto;
  position: absolute;
  top: 20px;
  right: 10px;
  cursor: pointer;
`;

const EditContainer = styled.div`
  height: 40px;
  font-size: var(--text-small);
  font-weight: var(--weight-small);
  text-align: center;
  line-height: 40px;
  border-bottom: 1px solid var(--color-sub-light-gray);
`;

const DeleteContainer = styled.div`
  height: 40px;
  font-size: var(--text-small);
  font-weight: var(--weight-small);
  text-align: center;
  line-height: 40px;
`;
