import styled from 'styled-components';

import Card from '../Card';

function CommentInput() {
  return (
    <Card>
      <InputWrapper>
        <input type="text"></input>
      </InputWrapper>
    </Card>
  );
}

export default CommentInput;

const InputWrapper = styled.div`
  width: 775px;
  height: 55px;

  input {
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
  }
`;
