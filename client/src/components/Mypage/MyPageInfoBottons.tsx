import styled from "styled-components";

import MyPageButton from "./MyPageButton";

const MyPageInfoBottons = () => {
  return (
    <MyPageInfoBottonContainer>
      <MyPageButton>회원 정보 수정</MyPageButton>
      <MyPageButton>로그아웃</MyPageButton>
      <MyPageButton>회원 탈퇴</MyPageButton>
    </MyPageInfoBottonContainer>
  );
};

export default MyPageInfoBottons;

const MyPageInfoBottonContainer = styled.div`
  width: 350px;
  height: 200px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
