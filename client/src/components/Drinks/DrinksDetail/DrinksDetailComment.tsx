import React, { useState } from 'react';
import styled from "styled-components";
import Comment from "../../UI/Comment/Comment";
import CommentInput from "../../UI/Comment/CommentInput";
import { DrinksDetailProps } from "../../../interfaces/Drinks.inerface";

function DrinksDetailComment({ drinksDetail }: DrinksDetailProps) {
  const [edit, setEdit] = useState<boolean>(false)

  console.log(edit)

  const handleCommentEditOpen = () => {
    setEdit(prev => !prev)
    console.log('prev')
  }

  return (
    <MainContainer>
      <CommentInput drinkId={drinksDetail?.drinkId} />
      {drinksDetail?.commentDrinks.map((el) => {
        return <Comment key={el.commentId} comments={el} onClick={handleCommentEditOpen} />
      })}
    </MainContainer >
  );
}

export default DrinksDetailComment;

const MainContainer = styled.div`
  margin-bottom: var(--5x-large);
`;
