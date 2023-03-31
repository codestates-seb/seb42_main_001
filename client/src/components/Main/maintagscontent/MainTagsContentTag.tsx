import styled from 'styled-components';

interface ITagProps {
  tagName: string | undefined;
}

function MainTagsContentTag({ tagName }: ITagProps) {
  return (
    <MainContainer>
      <TagWrap>{tagName}</TagWrap>
    </MainContainer>
  );
}

export default MainTagsContentTag;

const MainContainer = styled.div`
  margin-right: 20px;
`;

const TagWrap = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid var(--color-main);
  border-radius: 50px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--x-small);
  text-align: center;
  color: var(--color-main);
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    background-color: var(--color-main);
    color: var(--color-white);
  }

  @media only screen and (max-width: 1150px) {
    width: 60px;
    height: 60px;
    font-size: var(--2x-small);
  }
`;
