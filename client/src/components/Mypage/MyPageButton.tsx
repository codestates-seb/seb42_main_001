import styled from "styled-components";

interface MyPageButtonProps {
  children?: string;
  onClick?: () => void;
}

const MyPageButton = ({ children, onClick }: MyPageButtonProps) => {
  return (
    <MyPageButtonContainer onClick={onClick}>{children}</MyPageButtonContainer>
  );
};

export default MyPageButton;

const MyPageButtonContainer = styled.button`
  width: 350px;
  height: 60px;
  color: var(--color-main);
  border: none;
  border: 1px solid var(--color-sub-light-gray);
  border-radius: var(--radius-size);
  background-color: var(--color-white);
  font-size: var(--text-small);
  cursor: pointer;
`;
