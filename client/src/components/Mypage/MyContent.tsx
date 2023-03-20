import styled from "styled-components";

import Card from "../UI/Card";
import MyConstentTitle from "./MyConstentTitle";
import MyContentBox from "./MyContentBox";
import MyCreateContent from "./MyCreateContent";
import MyLikeContentBox from "./MyLikeContentBox";

function MyContent() {
  return (
    <MainContainer>
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
    </MainContainer>
  );
}

export default MyContent;

const MyContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--2x-large) 0 var(--2x-large) var(--2x-large);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    margin: 0;
    padding: var(--large);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;


const MainContainer = styled.div`
  height: 100%;
`