import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Card from "../UI/Card";
import ArticleModalContent from "./ArticleModalContent";

interface ArticleModalPorps {
  onClick?: () => void;
}

function ArticleModal({ onClick }: ArticleModalPorps) {
  const [modalNum, setModalNum] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const handleLeftClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (modalRef.current) {
      if (modalNum !== 0) {
        modalRef.current.style.cssText = `top: -${modalNum - 1}00%;`;
        setModalNum(modalNum - 1);
      }
    }
  };

  const handleRightClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (modalRef.current) {
      if (modalNum !== 1) {
        // 1인 부분 데이터를 서버에서 받게 되면 데이터의 갯수로 표기
        modalRef.current.style.cssText = `top: -${modalNum + 1}00%;`;
        setModalNum(modalNum + 1);
      }
    }
  };

  return (
    <ArticleModalContainer onClick={onClick}>
      <ArticleModalArrowButton onClick={handleLeftClick}>
        <div>{"<"}</div>
      </ArticleModalArrowButton>
      <CardContainer ref={modalRef}>
        <Card>
          <ArticleModalContent />
        </Card>
      </CardContainer>
      <ArticleModalArrowButton onClick={handleRightClick}>
        <div>{">"}</div>
      </ArticleModalArrowButton>
    </ArticleModalContainer>
  );
}

export default ArticleModal;

const ArticleModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const ArticleModalArrowButton = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 var(--xxx-large);
  font-size: var(--xxx-large);
  color: var(--color-white);
  > div {
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const CardContainer = styled.div`
  position: relative;
  top: 0;
`;
