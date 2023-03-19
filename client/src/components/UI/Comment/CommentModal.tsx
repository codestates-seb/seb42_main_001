import styled from 'styled-components';
import axios from 'axios';

import Card from '../Card';

interface CommentProps {
  commentId?: number;
}

function CommentModal({ commentId }: CommentProps) {

  const handleDrinksDel = async () => {
    try {
      await axios.delete(`/comments/drinks/${commentId}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION}`,
          Refresh: process.env.REACT_APP_REFRESH,
        },
      })
      window.location.reload();
      console.log('삭제 완')
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <ModalContainer>
      <Card>
        <EditContainer>Edit</EditContainer>
        <DeleteContainer onClick={handleDrinksDel}>Delete</DeleteContainer>
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
