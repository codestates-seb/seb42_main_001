import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface props {
  content: string;
}

function ArticleDetailBody({ content }: props) {
  console.log(content);
  return (
    <MainContainer>
      {content.includes('http') ? (
        <img src={`${content}`} alt='drinkImg'></img>
      ) : (
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
        ></ReactMarkdown>
      )}
    </MainContainer>
  );
}

export default ArticleDetailBody;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-main);
  width: 100%;
  padding: var(--large) var(--2x-large) var(--2x-large) var(--2x-large);
  font-size: var(--small);
  line-height: calc(var(--x-small) * 2);

  ul, ol {
    padding-left: var(--large);
  }

  p {
    margin: var(--2x-small) 0;
  }

  img {
    display: flex;
    width: 200px;
  }

  @media only screen and (max-width: 450px) {
    padding: 0 var(--medium) var(--medium) var(--medium);
    font-size: calc(var(--large) / 2);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    white-space: pre-line;
    width: 100%;

    img {
      width: 80%;
    }
  }
`;
