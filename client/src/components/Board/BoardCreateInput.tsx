import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import Card from '../UI/Card';

function BoardCreateInput() {
  return (
    <Card>
      <InputContainer>
        <input type="text" placeholder="제목을 입력해 주세요"></input>
        <EditorContainer>
          <Editor
            initialValue="내용을 입력해주세요"
            previewStyle="vertical"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
          />
        </EditorContainer>
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
  padding-top: 30px;
  border-top: 1px solid var(--color-sub-light-gray);
`;
