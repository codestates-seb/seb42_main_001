import { useState } from "react";
import styled from "styled-components";

import MyContent from "../components/Mypage/MyContent";
import MyPageEdit from "../components/Mypage/MyPageEdit";
import MyPageInfo from "../components/Mypage/MyPageInfo";

function Mypage() {
  const [isEdit, setEdit] = useState(false);

  const handleMyPageEdit = () => {
    setEdit(!isEdit);
  };

  return (
    <MypageContainer>
      {isEdit ? (
        <MyPageEdit isEdit={isEdit} onClick={handleMyPageEdit} />
      ) : (
        <MyPageInfo isEdit={isEdit} onClick={handleMyPageEdit} />
      )}
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
