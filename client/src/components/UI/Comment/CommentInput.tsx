import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import Card from "../Card";
import { DrinksDetailProps } from '../../../interfaces/Drinks.inerface'

function CommentInput({ drinksDetail }: DrinksDetailProps) {
  const [commentValue, setCommentValue] = useState('')

  const handleCommentValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue(e.target.value)
  }

  const handleDrinksPost = async () => {
    const newDrinks = {
      drinkId: drinksDetail?.drinkId,
      commentContent: commentValue
    }
    try {
      await axios.post(`/comments/drinks`, newDrinks, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION}`,
          Refresh: process.env.REACT_APP_REFRESH,
        },
      })
      setCommentValue('')
      window.location.reload();
      console.log('gg')
    }
    catch (error) {
      console.log(error)
    }
  }

  // 에딧을 누르면 false엿던 상태가 true가 되며 input에 focus하는 로직 focus하며 value는 edit 누른 commentId값 받아오기 event.target?

  return (
    <MainContainer>
      <section>
        <SearchContainer>
          <Card>
            <input onChange={handleCommentValueChange} value={commentValue} placeholder="댓글을 작성해 주세요" />
          </Card>
        </SearchContainer>
      </section>
      <Button type="submit" width={`--5x-large`} height={`--xx-large`} bgColor={`--color-main`} borderColor={`--color-main`} color={`--color-white`} onClick={handleDrinksPost}>
        submit
      </Button>
    </MainContainer>
  );
}

export default CommentInput;

const MainContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: var(--x-large);

section {
  width: 90%;
  margin-right: var(--medium);
}
`

const SearchContainer = styled.div`
width: 100%;

input {
  width: 100%;
  height: 60px;
  border: none;
  outline: none;
  border-radius: var(--xx-small);
  padding-left: var(--medium);

}
`;
