import styled from "styled-components";

import Card from "../UI/Card";
import MyPageProfil from "./MyPageProfil";
import MyPageInfoItem from "./MyPageInfoItem";
import MyPageEditButton from "./MyPageEditButton";

interface MyPageEditProps {
  isEdit?: boolean;
  onClick: () => void;
}

const MyPageEdit = ({ isEdit, onClick }: MyPageEditProps) => {
  return (
    <Card>
      <MyPageEditContainer>
        <MyPageProfil></MyPageProfil>
        <MyPageInfoItem isEdit={isEdit} />
        <MyPageEditButton onClick={onClick} />
      </MyPageEditContainer>
    </Card>
  );
};

export default MyPageEdit;

const MyPageEditContainer = styled.div`
  width: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
