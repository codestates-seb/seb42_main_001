import styled from 'styled-components';

import Card from '../UI/Card';

function BoardCreateInput() {
  return (
    <Card>
      <InputContainer>
        <input type="text" placeholder="제목을 입력해 주세요"></input>
        <EditorContainer></EditorContainer>
      </InputContainer>
    </Card>
  );
}

export default BoardCreateInput;

const InputContainer = styled.div`
  width: 100%;
  height: 980px;
  padding: 45px 50px;

  input {
    width: 100%;
    height: 35px;
    font-weight: var(--weight-medium);
    font-size: var(--text-x-large);
    line-height: 35px;
    margin-bottom: 45px;
    border: none;
    outline: none;
  }
`;

const EditorContainer = styled.div`
  width: 100%;
  height: auto;
  border-top: 1px solid var(--color-sub-light-gray);
`;
