import styled from "styled-components";

interface MyPageButtonProps {
  children?: string;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

const MyPageButton = ({
  children,
  onClick,
  color,
  backgroundColor,
}: MyPageButtonProps) => {
  return (
    <MyPageButtonContainer
      onClick={onClick}
      color={color}
      backgroundColor={backgroundColor}
    >
      {children}
    </MyPageButtonContainer>
  );
};

export default MyPageButton;

const MyPageButtonContainer = styled.button<MyPageButtonProps>`
  width: 85%;
  max-width: 350px;
  height: 60px;
  color: ${(props) => `var(${props.color})` || `var(--color-main)`};
  border: none;
  border: 1px solid var(--color-sub-light-gray);
  border-radius: var(--2x-small);
  background-color: ${(props) =>
    `var(${props.backgroundColor})` || `var(--color-white)`};
  font-size: var(--text-small);
  cursor: pointer;
`;
