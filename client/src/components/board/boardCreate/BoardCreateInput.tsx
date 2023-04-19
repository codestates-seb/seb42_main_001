import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import customAxios from '../../../api/customAxios';
import Card from '../../ui/Card';
import React from 'react';
import { IBoardCreateInput } from '../../../util/interfaces/boards.interface';

function BoardCreateInput({
  handleBoardTitleChange,
  handleBoardContentChange,
  handleBoardImageAdd,
  editData,
  preData,
}: IBoardCreateInput) {
  const editorRef = useRef<Editor>(null);
  const [title, setTitle] = useState(editData?.boardTitle);

  const handleContentChange = () => {
    if (editorRef.current) {
      const data = editorRef.current.getInstance().getMarkdown();
      handleBoardContentChange(data);
    }
  };

  useEffect(() => {
    if (editData) {
      setTitle(editData!.boardTitle);
      handleBoardTitleChange(editData!.boardTitle);
      editorRef.current?.getInstance().setMarkdown(editData.content);
    } else if (preData) {
      setTitle(preData!.boardTitle);
      handleBoardTitleChange(preData!.boardTitle);
      editorRef.current?.getInstance().setMarkdown(preData.boardContent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editData, preData]);
  return (
    <Card>
      <InputContainer>
        <input
          type='text'
          placeholder={'제목을 입력해 주세요'}
          value={title ? title : ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleBoardTitleChange(e.target.value);
            setTitle(e.target.value);
          }}
        />
        <EditorContainer>
          <Editor
            initialValue={'내용을 입력해주세요'}
            previewStyle='vertical'
            height='600px'
            ref={editorRef}
            initialEditType='markdown'
            useCommandShortcut={true}
            onChange={handleContentChange}
            hooks={{
              addImageBlobHook: async (blob, callback) => {
                const formData = new FormData();
                formData.append('file', blob);

                const imgData = await customAxios.post(
                  '/spring/upload',
                  formData
                );
                const url = imgData.data[0].boardImageUrl;
                handleBoardImageAdd(imgData.data[0]);

                callback(url, '');
              },
            }}
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

  @media only screen and (max-width: 768px) {
    height: 100vh;
    padding: var(--large);

    input {
      height: 20px;
      font-weight: var(--weight-small);
      font-size: var(--text-large);
      line-height: 35px;
      margin-bottom: 20px;
    }
  }
`;

const EditorContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 30px;
  border-top: 1px solid var(--color-sub-light-gray);

  @media only screen and (max-width: 768px) {
    padding-top: 20px;
    > div {
      height: 80vh !important;
      font-size: var(--text-small) !important;
    }
  }
`;
