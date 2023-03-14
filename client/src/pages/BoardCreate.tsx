import styled from 'styled-components';

import { BsPlusCircle } from 'react-icons/bs';
import BoardCreateTags from '../components/Board/BoardCreateTags';
import BoardCreateBtn from '../components/Board/BoardCreateBtn';
import BoardCreateInput from '../components/Board/BoardCreateInput';

function BoardCreate() {
  return (
    <Wrapper>
      <BoardCreateController>
        <BoardCreateTagController>
          <IconWrapper>
            <BsPlusCircle />
          </IconWrapper>
          <BoardCreateTags></BoardCreateTags>
        </BoardCreateTagController>
        <BoardCreateBtn></BoardCreateBtn>
      </BoardCreateController>
      <BoardCreateInput></BoardCreateInput>
    </Wrapper>
  );
}

export default BoardCreate;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const BoardCreateController = styled.div`
  padding: 100px 0 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoardCreateTagController = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 15px;

  > svg {
    width: 35px;
    height: 35px;
  }
`;
