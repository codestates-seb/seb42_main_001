import React from "react";
import styled from "styled-components";
import Comment from "../../UI/Comment/Comment";
import CommentInput from "../../UI/Comment/CommentInput";

function DrinksDetailComment() {
  return (
    <MainContainer>
      <CommentInput />
      <Comment />
    </MainContainer>
  );
}

export default DrinksDetailComment;

const MainContainer = styled.div`
  margin-bottom: var(--5x-large);
`