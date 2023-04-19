import styled from 'styled-components';

import { RiMoreLine } from 'react-icons/ri';
import { ICommentModal } from '../../util/interfaces/boards.interface';

function More({ handleModalOpen }: ICommentModal) {
  return (
    <IconWrapper onClick={handleModalOpen}>
      <RiMoreLine />
    </IconWrapper>
  );
}

export default More;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > svg {
    width: 20px;
    height: 20px;
  }
`;
