import styled from "styled-components";
import MyPageButton from "./MyPageButton";

interface MyPageEditButtonProps {
  onClick?: () => void;
}

const MyPageEditButton = ({ onClick }: MyPageEditButtonProps) => {
  return (
    <MyPageEditButtonContainer>
      <MyPageButton
        onClick={onClick}
        color={"--color-white"}
        backgroundColor={"--color-main"}
      >
        수정 완료
      </MyPageButton>
    </MyPageEditButtonContainer>
  );
};

export default MyPageEditButton;

const MyPageEditButtonContainer = styled.div`
  width: 90%;
  max-width: 450px;
  height: 200px;
  margin-top: var(--large);
  padding-bottom: var(--x-large);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--text-small);
`;
