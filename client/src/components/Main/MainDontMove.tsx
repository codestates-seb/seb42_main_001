import styled from "styled-components";

import MainArrowButton from "./MainArrowButton";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const MainDontMove = () => {
  const handleLeft = () => {};

  const handleRight = () => {};

  return (
    <MainDontMoveContauner>
      <MainArrowButton arrow={<SlArrowLeft />} onClick={handleLeft} />
      <MainArrowButton arrow={<SlArrowRight />} onClick={handleRight} />
    </MainDontMoveContauner>
  );
};

export default MainDontMove;

const MainDontMoveContauner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
