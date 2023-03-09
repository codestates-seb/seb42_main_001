import styled from "styled-components";

const MyPageInfoItem = () => {
  return (
    <MyPageInfoItemContainer>
      <MyPageInfoId>antjdgkdl</MyPageInfoId>
      <MyPageInfoOneLiner>한 줄 소개</MyPageInfoOneLiner>
    </MyPageInfoItemContainer>
  );
};

export default MyPageInfoItem;

const MyPageInfoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const MyPageInfoId = styled.div`
  color: var(--color-main);
  font-size: var(--text-large);
  font-weight: 600;
  margin-bottom: 35px;
`;

const MyPageInfoOneLiner = styled.div`
  color: var(--color-main);
  font-size: var(--text-medium);
`;
