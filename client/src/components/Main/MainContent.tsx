import styled from "styled-components";
import MainContentBody from "./MainContentBody";

const MainContent = () => {
  return (
    <MainContentContainer>
      <MainContentBody />
    </MainContentContainer>
  );
};

export default MainContent;

const MainContentContainer = styled.div`
  height: 100%;
  flex: 1 0;
  padding-top: 185px;

  @media only screen and (max-width: 768px) {
  width: 400px;
  }
`;
