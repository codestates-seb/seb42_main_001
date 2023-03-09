import styled from "styled-components";

function ArticleContentBody() {
  return (
    <ArticleContentBodyContainer>
      스코틀랜드 증류소에서 곡물의 담화, 발효, 증류시켜 3년 이상 숙성시킨 도수
      40% 이상의 증류수를 스카치 위스키라고 말합니다.
    </ArticleContentBodyContainer>
  );
}

export default ArticleContentBody;

const ArticleContentBodyContainer = styled.div`
  flex: 2 0;
  padding: 0 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--text-medium);
  line-height: 26px;
  text-align: center;
`;
