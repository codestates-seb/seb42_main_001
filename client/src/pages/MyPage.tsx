import styled from "styled-components";
import MyContent from "../components/Mypage/MyContent";
import MyPageInfo from "../components/Mypage/MyPageInfo";

function Mypage() {
  return (
    <MypageContainer>
      <MyPageInfo />
      <MyContent />
    </MypageContainer>
  );
}

export default Mypage;

const MypageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 130px 0;
  background-color: var(--color-main);
  display: flex;
  justify-content: space-between;
`;
