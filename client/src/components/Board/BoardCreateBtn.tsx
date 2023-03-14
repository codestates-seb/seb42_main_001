import styled from 'styled-components';

import { SubmitBtn } from '../UI/Comment/CommentSubmitBtn';

function BoardCreateBtn() {
  return <BoardSubmitBtn>submit</BoardSubmitBtn>;
}

export default BoardCreateBtn;

const BoardSubmitBtn = styled(SubmitBtn)`
  width: 210px;
  height: 55px;
`;
