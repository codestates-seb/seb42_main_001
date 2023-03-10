import styled from "styled-components";

import Card from "../UI/Card";
import MyPageInfoButtons from "./MyPageInfoButtons";
import MyPageInfoItem from "./MyPageInfoItem";
import MyPageProfil from "./MyPageProfil";

interface MyPageInfoProps {
  isEdit: boolean;
  onClick: () => void;
}

function MyPageInfo({ isEdit, onClick }: MyPageInfoProps) {
  return (
    <Card>
      <MyPageInfoContainer>
        <MyPageProfil />
        <MyPageInfoItem isEdit={isEdit} />
        <MyPageInfoButtons onClick={onClick} />
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
