import styled from "styled-components";

function ArticleContentBody() {
  return (
    <ArticleContentBodyContainer>
      {`여러분은 바에 가보신 적 있어요? 🍷
어땠어요?
저는 모르는 이름이 너무 많아서 아무 것도 모르고
코카콜라 맛있다로 찍은 기억 밖에 안나네요.😂
하지만 이렇게 어려운 양주 이름들 사이에서도 가장 먼저 들어오는 이름은 있어요!
여러분은 위스키를 아시나요 :) ?
사람마다 다르겠지만, 많은 사람이 위스키를 알고있다는 것에는 동의할거에요.
양주 종류 3가지만 생각해보라고 하면 꼭! 위스키는 들어갈거구요.
그만큼 위스키는 잘은 몰라도 꽤나 즐겨마시는 양주라고 짐작할 수 있어요.
위스키에 대해서만이라도 어느정도 알고 간다면
바에 들어갔을 때, 코카콜라로 찍을 일은 줄어들거에요.
친한 친구나 연인에게 아는 척 할 수 있는 기회는 덤이구요. (ㅋㅋ)
게다가, 위스키를 알면 다른 양주가 만들어지는 과정을 쉽게 이해할 수 있어요.
시작은 위스키여도 결과적으로는 위스키를 기준으로 다른 양주들에 대한 이해도가 높아지는거죠.
서론이 길었네요. 그럼 같이 여정을 떠나볼까요?`}
    </ArticleContentBodyContainer>
  );
}

export default ArticleContentBody;

const ArticleContentBodyContainer = styled.div`
  flex: 2 0;
  padding: 0 var(--xx-large);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--text-medium);
  line-height: 26px;
  text-align: center;
`;