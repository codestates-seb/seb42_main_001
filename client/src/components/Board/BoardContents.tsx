import styled from "styled-components";

function BoardContents() {
  return (
    <BoardContentsContainer>
      <BoardContentsTitle>잭콕 취향이신 분 계실까요</BoardContentsTitle>
      <BoardContentsBody>
        요즘 잭콕에 맛이 들렸는데요... 아티클에 나와 있는 안주 말고도 다른
        페어링 할 수 있는 안주는 뭐가 있을까요?? 추천 해 주시면 감사하겠습니다
      </BoardContentsBody>
    </BoardContentsContainer>
  );
}

export default BoardContents;

const BoardContentsContainer = styled.div`
  margin: var(--medium) 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: top;
`;

const BoardContentsTitle = styled.div`
  margin-bottom: var(--x-small);
  font-size: var(--medium);
  font-weight: var(--weight-large);
`;

const BoardContentsBody = styled.div`
  line-height: var(--medium);
  font-size: var(--x-small);
  font-weight: var(--weight-x-small);
`;
