import styled from 'styled-components';

interface props {
  title: string;
}

function ArticleDetailTitle({ title }: props) {
  return <MainContainer>
    <TextContainer>
      {title}
    </TextContainer>
  </MainContainer>;
}

export default ArticleDetailTitle;

const MainContainer = styled.div`
  color: var(--color-main);
  width: 100%;
  padding: var(--2x-large) var(--2x-large) 0 var(--2x-large);
  font-size: var(--x-large);
  font-weight: var(--weight-medium);

    @media only screen and (max-width: 479px) {
      padding: var(--medium) var(--medium) var(--2x-small) var(--medium); 
      font-size: var(--medium);
      display: flex;
      flex-direction: column;
      width: 100%;
    }
`;

const TextContainer = styled.div`
  border-bottom: 1px solid var(--color-sub-light-gray);
  padding-bottom: var(--medium);

    @media only screen and (max-width: 479px) {
      padding-bottom: var(--2x-small);
    }
`