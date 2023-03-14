import styled from "styled-components";
import TagsBody from "./TagsBody";
import TagsTitle from "./TagsTitle";

const MainTags = () => {
  return (
    <MainTagsContainer>
      <TagsTitle />
      <TagsBody />
    </MainTagsContainer>
  );
};

export default MainTags;

const MainTagsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 160px 0;
  display: flex;
  flex-direction: column;
`;
