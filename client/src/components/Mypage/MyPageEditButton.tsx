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
  width: 350px;
  height: 200px;
  margin-top: 80px;
  padding-bottom: var(--x-large);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: var(--text-small);
`;
