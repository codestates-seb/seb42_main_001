import styled from "styled-components";
import Button from "../Button";

import Card from "../Card";

function CommentInput() {
  return (
    <MainContainer>
      <SearchContainer>
        <Card>
          <input placeholder="댓글을 작성해 주세요" />
        </Card>
      </SearchContainer>
      <Button type="submit" width={`--5x-large`} height={`--xx-large`} bgColor={`--color-main`} borderColor={`--color-main`} color={`--color-white`}>
        submit
      </Button>
    </MainContainer>
  );
}

export default CommentInput;

const MainContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: var(--x-large);
`

const SearchContainer = styled.div`
width: 85%;

input {
  width: 100%;
  height: 60px;
  border: none;
  outline: none;
  border-radius: var(--xx-small);
  padding-left: var(--medium);
}
`;
