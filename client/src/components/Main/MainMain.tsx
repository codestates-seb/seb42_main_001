import styled from "styled-components";
import MainArrowButton from "./MainArrowButton";
import MainContent from "./MainContent";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const MainMain = () => {
  return (
    <MainContainer>
      <MainArrowButton arrow={<SlArrowLeft />} />
      <MainContent />
      <MainArrowButton arrow={<SlArrowRight />} />
    </MainContainer>
  );
};

export default MainMain;

const MainContainer = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
`;
