import styled from "styled-components";

interface MyContentBoxProps {
  children: any;
}

const MyContentBox = ({ children }: MyContentBoxProps) => {
  return <MyContentBoxContainer>{children}</MyContentBoxContainer>;
};

export default MyContentBox;

const MyContentBoxContainer = styled.div`
  width: 350px;
  height: 660px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
