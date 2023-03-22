import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import axios from "axios";

import Card from "../UI/Card";
import React from "react";
import { Data } from "../../interfaces/boards.interface"

interface BoardCreateInputProps {
  title: (title: string) => void;
  content: (content: string) => void;
  image: (url: { imageId: number; boardImageUrl: string }) => void;
  iseditData?: Data;
}

function BoardCreateInput({
  title,
  content,
  image,
  iseditData,
}: BoardCreateInputProps) {
  const editorRef = useRef<Editor>(null);
  const [isTitle, setTitle] = useState(iseditData?.boardTitle);

  const handleContentChange = () => {
    if (editorRef.current) {
      const data = editorRef.current.getInstance().getMarkdown();
      content(data);
    }
  };

  useEffect(() => {
    if (iseditData) {
      setTitle(iseditData!.boardTitle);
      title(iseditData!.boardTitle);
      editorRef.current?.getInstance().setMarkdown(iseditData.content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iseditData]);
  return (
    <Card>
      <InputContainer>
        <input
          type="text"
          placeholder={"제목을 입력해 주세요"}
          value={isTitle ? isTitle : ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            title(e.target.value);
            setTitle(e.target.value);
          }}
        ></input>
        <EditorContainer>
          <Editor
            initialValue={"내용을 입력해주세요"}
            previewStyle="vertical"
            height="600px"
            ref={editorRef}
            initialEditType="markdown"
            useCommandShortcut={true}
            onChange={handleContentChange}
            hooks={{
              addImageBlobHook: async (blob, callback) => {
                const formData = new FormData();
                formData.append("file", blob);

                const img = await axios.post("/spring/upload", formData);
                const url = img.data[0].boardImageUrl;
                image(img.data[0]);

                callback(url, "");
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
`;

const EditorContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 30px;
  border-top: 1px solid var(--color-sub-light-gray);
`;
