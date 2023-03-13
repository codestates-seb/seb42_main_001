import styled from "styled-components";
import MyPageContentBox from "./MyPageContentBox";

const MyCreateContent = () => {
  return (
    <MyCreateContentContainer>
      <MyPageContentBox></MyPageContentBox>
      <MyPageContentBox></MyPageContentBox>
      <MyPageContentBox></MyPageContentBox>
    </MyCreateContentContainer>
  );
};

export default MyCreateContent;

const MyCreateContentContainer = styled.div`
  width: 350px;
  height: 275px;
  overflow: overlay;
  &::-webkit-scrollbar {
    display: none;
  }
`;
