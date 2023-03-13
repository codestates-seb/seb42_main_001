import styled from 'styled-components';

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
  width: 645px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BoardContentsTitle = styled.div`
  font-size: var(--large-font-size);
  font-weight: 600;
  line-height: 27px;
  margin: 25px 12px 13px 12px;
`;

const BoardContentsBody = styled.div`
  font-size: var(--small-font-size);
  font-weight: 500;
  line-height: 22px;
  margin: 0 12px 20px 12px;
`;
