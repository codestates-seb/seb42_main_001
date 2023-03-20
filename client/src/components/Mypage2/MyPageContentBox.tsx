import styled from "styled-components";

interface MyPageContentBoxProps {
  children?: any;
}

const MyPageContentBox = ({ children }: MyPageContentBoxProps) => {
  return <MyPageContentBoxContainer>{children}</MyPageContentBoxContainer>;
};

export default MyPageContentBox;

const MyPageContentBoxContainer = styled.div`
  width: 350px;
  height: 160px;
  border: 1px solid var(--color-sub-gray);
  border-radius: var(--2x-small);
  margin-bottom: var(--small);
`;
