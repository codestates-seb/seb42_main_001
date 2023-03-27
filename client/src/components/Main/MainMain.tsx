import styled from "styled-components";

import MainContent from "./MainContent";

const MainMain = () => {
  return (
    <MainContainer>
      <MainContent />
    </MainContainer>
  );
};

export default MainMain;

const MainContainer = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;

  @media only screen and (max-width: 768px) {
    width: 400px;
  }
`;
