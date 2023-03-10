import styled from "styled-components";

interface MyPageProfilProps {
  children?: any;
}

const MyPageProfil = ({ children }: MyPageProfilProps) => {
  return <MyPageProfilContainer>{children}</MyPageProfilContainer>;
};

export default MyPageProfil;

const MyPageProfilContainer = styled.div`
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background-color: var(--color-sub-light-gray);
  margin-top: 85px;
`;
