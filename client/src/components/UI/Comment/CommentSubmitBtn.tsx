import styled from 'styled-components';

export function CommentSubmitBtn() {
  return <SubmitBtn>submit</SubmitBtn>;
}

export const SubmitBtn = styled.button`
  width: 130px;
  height: 55px;
  background-color: var(--color-main);
  color: var(--color-white);
  box-shadow: 1px 1px 20px rgba(71, 63, 63, 0.1);
  border-radius: 10px;
  cursor: pointer;
`;
