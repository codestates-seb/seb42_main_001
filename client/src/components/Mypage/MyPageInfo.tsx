import styled from "styled-components";

import Card from "../UI/Card";
import MyPageInfoBotton from "./MyPageInfoBottons";
import MyPageInfoItem from "./MyPageInfoItem";
import MyPageProfil from "./MyPageProfil";

function MyPageInfo() {
  return (
    <Card>
      <MyPageInfoContainer>
        <MyPageProfil />
        <MyPageInfoItem />
        <MyPageInfoBotton />
      </MyPageInfoContainer>
    </Card>
  );
}

export default MyPageInfo;

const MyPageInfoContainer = styled.div`
  width: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
