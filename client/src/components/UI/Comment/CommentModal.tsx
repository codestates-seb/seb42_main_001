import styled from 'styled-components';
import axios from 'axios';

import Card from '../Card';
import { Link } from 'react-router-dom';

interface CommentProps {
  commentId?: number;
  onClick?: () => void;
}

function CommentModal({ commentId, onClick }: CommentProps) {

  const handleDrinksCommentDelte = async () => {
    try {
      await axios.delete(`/comments/drinks/${commentId}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION}`,
          Refresh: process.env.REACT_APP_REFRESH,
        },
      })
      window.location.reload();
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleCommentDelete = () => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      handleDrinksCommentDelte();
    }
  };

  return (
    <ModalContainer>
      <Card>
        <Link to={`/comment/drinks/${commentId}`}>
          <EditContainer onClick={onClick}>Edit</EditContainer>
        </Link>
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
