import styled from 'styled-components';

function MainDrinksContentTitle() {
  return (
    <MainContainer>
      <TitleWrap>Best Drinks</TitleWrap>
      <BodyWrap>지금 가장 인기 많은 술을 만나 보세요!</BodyWrap>
    </MainContainer>
  );
}

export default MainDrinksContentTitle;

const MainContainer = styled.div`
  width: 25%;
  color: var(--color-white);
  margin-left: var(--large);

  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin-top: var(--x-large);
  }
`;

const TitleWrap = styled.div`
  font-size: var(--x-large);
  margin-bottom: var(--x-small);
  white-space: nowrap;

  @media only screen and (max-width: 1024px) {
    margin: var(--3x-small) 0;
    text-align: center;
  }
`;

const BodyWrap = styled.div`
  margin-bottom: var(--x-large);

  @media only screen and (max-width: 1024px) {
    white-space: nowrap;
    margin: var(--3x-small) 0;
    text-align: center;
  }
`;
