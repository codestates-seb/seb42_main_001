import styled from "styled-components";

function BoardCreate() {
  return <PageButton>{`New Post`}</PageButton>;
}

export default BoardCreate;

const PageButton = styled.div`
  color: var(--color-main);
  background-color: var(--color-white);
  border: 1px solid var(--color-main);
  width: 200px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--large);
  cursor: pointer;

  svg {
    font-size: var(--text-large);
  }
`;
