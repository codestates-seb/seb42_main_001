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
    <SizeContainer>
      <Card>
        <MyPageEditContainer>
          <MyPageProfil></MyPageProfil>
          <MyPageInfoItem isEdit={isEdit} />
          <MyPageEditButton onClick={onClick} />
        </MyPageEditContainer>
      </Card>
    </SizeContainer>
  );
};

export default MyPageEdit;

const MyPageEditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 700px;
    min-width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: var(--x-large);
  }
`;

const SizeContainer = styled.div`
  width: 100%;
  max-width: 700px;
  min-width: 350px;
`;
