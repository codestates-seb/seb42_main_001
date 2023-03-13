import styled from "styled-components";

import Card from "../UI/Card";
import MyConstentTitle from "./MyConstentTitle";
import MyContentBox from "./MyContentBox";
import MyCreateContent from "./MyCreateContent";
import MyLikeContentBox from "./MyLikeContentBox";

function MyContent() {
  return (
    <Card>
      <MyContentContainer>
        <MyContentBox>
          <MyConstentTitle text={"Likes"} />
          <MyLikeContentBox />
        </MyContentBox>
        <MyContentBox>
          <MyConstentTitle text={"Board"} />
          <MyCreateContent />
          <MyConstentTitle text={"Comment"} />
          <MyCreateContent />
        </MyContentBox>
      </MyContentContainer>
    </Card>
  );
}

export default MyContent;

const MyContentContainer = styled.div`
  width: 100%;
  max-width: 940px;
  height: 100%;
  padding: var(--xx-large) 0 var(--xx-large) var(--xx-large);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
