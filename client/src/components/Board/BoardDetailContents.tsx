import styled from "styled-components";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

interface BoardDetailContentsProps {
  content?: string;
}

function BoardDetailContents({ content }: BoardDetailContentsProps) {
  console.log(content);
  return (
    <ContentsContainer>
      <Viewer initialValue={content || ""} />
    </ContentsContainer>
  );
}

export default BoardDetailContents;

const ContentsContainer = styled.div`
  font-size: var(--text-medium);
  line-height: var(--large);
  margin-bottom: var(--4x-large);
`;
