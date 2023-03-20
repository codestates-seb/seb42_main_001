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
    <SizeContainer>
      <Card>
        <MyPageInfoContainer>
          <MyPageProfil />
          <MyPageInfoItem isEdit={isEdit} />
          <MyPageInfoButtons onClick={onClick} />
        </MyPageInfoContainer>
      </Card>
    </SizeContainer>
  );
}

export default MyPageInfo;

const MyPageInfoContainer = styled.div`
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
