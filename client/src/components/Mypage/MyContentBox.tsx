import styled from "styled-components";

interface MyContentBoxProps {
  children: any;
}

const MyContentBox = ({ children }: MyContentBoxProps) => {
  return <MyContentBoxContainer>{children}</MyContentBoxContainer>;
};

export default MyContentBox;

const MyContentBoxContainer = styled.div`
  width: 100%;
  max-width: 350px;
  height: 100%;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: var(--xx-large);

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;
