import styled from "styled-components";

function BoardDetailContents() {
  return (
    <ContentsContainer>
      요즘 잭콕에 맛이 들렸는데요... 아티클에 나와 있는 안주 말고도 다른 페어링
      할 수 있는 안주는 뭐가 있을까요?? 추천 해 주시면 감사하겠습니다
    </ContentsContainer>
  );
}

export default BoardDetailContents;

const ContentsContainer = styled.div`
  font-size: var(--text-medium);
  line-height: var(--large);
  margin-bottom: var(--4x-large);
`;
