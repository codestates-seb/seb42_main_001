import styled from "styled-components";

interface MyConstentTitleProps {
  text: string;
}

const MyConstentTitle = ({ text }: MyConstentTitleProps) => {
  return <MyConstentTitleContainer>{text}</MyConstentTitleContainer>;
};

export default MyConstentTitle;

const MyConstentTitleContainer = styled.div`
  font-size: var(--text-small);
  font-weight: var(--weight-large);
`;
