import React from "react";
import styled from "styled-components";
import Comment from "../../UI/Comment/Comment";
import CommentInput from "../../UI/Comment/CommentInput";
import { DrinksDetailProps } from '../../../interfaces/Drinks.inerface'

function DrinksDetailComment({ drinksDetail }: DrinksDetailProps) {

  // const handleDrinksCommentPatch = (e: React.MouseEvent<HTMLElement>) => {

  // }

  return (
    <MainContainer>
      <CommentInput drinksDetail={drinksDetail} />
      {drinksDetail?.commentDrinks.map(el => {
        return <Comment key={el.commentId} comments={el} />;
      })}
    </MainContainer>
  );
}

export default DrinksDetailComment;

const MainContainer = styled.div`
  margin-bottom: var(--5x-large);
`