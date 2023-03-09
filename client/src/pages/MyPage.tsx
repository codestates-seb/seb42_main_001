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

const MypageContainer = styled.div``;
