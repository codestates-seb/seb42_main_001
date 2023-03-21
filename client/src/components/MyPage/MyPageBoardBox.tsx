import React from "react";
import styled from "styled-components";
import MyPageBoardComment from "./MyPageBoardComment";
import MyPageBoardLike from "./MyPageBoardLike";

interface BarProps {
  selectedBar?: boolean;
  selectedBarBorad?: string;
}

function MyPageBoardBox({ selectedBar, selectedBarBorad }: BarProps) {
  return (
    <MainContainer>
      {selectedBarBorad ? (
        selectedBarBorad === "Likes" ? (
          <MyPageBoardLike />
        ) : selectedBarBorad === "Comments" ? (
          <MyPageBoardComment />
        ) : (
          <MyPageBoardComment board="board" />
        )
      ) : selectedBar ? (
        <MyPageBoardComment />
      ) : (
        <MyPageBoardLike />
      )}
    </MainContainer>
  );
}

export default MyPageBoardBox;

const MainContainer = styled.div`
  width: 100%;
  height: calc(var(--4x-large) * 5);
`;
