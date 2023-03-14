import styled from "styled-components";
import MainArrowButton from "./MainArrowButton";
import MainContent from "./MainContent";

const MainMain = () => {
  return (
    <MainContainer>
      <MainArrowButton arrow="<" />
      <MainContent />
      <MainArrowButton arrow=">" />
    </MainContainer>
  );
};

export default MainMain;

const MainContainer = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
`;
