import styled from "styled-components";

interface MyPageInfoItemProps {
  isEdit?: boolean;
}

const MyPageInfoItem = ({ isEdit }: MyPageInfoItemProps) => {
  return (
    <MyPageInfoItemContainer>
      {isEdit ? <MyPageEditId /> : <MyPageInfoId>antjdgkdl</MyPageInfoId>}
      {isEdit ? (
        <MyPageEditOneLiner />
      ) : (
        <MyPageInfoOneLiner>한 줄 소개</MyPageInfoOneLiner>
      )}
    </MyPageInfoItemContainer>
  );
};

export default MyPageInfoItem;

const MyPageInfoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: var(--x-large);
  > input {
    width: 120%;
    height: 60px;
    border: 1px solid var(--color-sub-light-gray);
    border-radius: var(--2x-small);
  }
`;

const MyPageInfoId = styled.div`
  margin-bottom: var(--x-large);
  color: var(--color-main);
  font-size: var(--text-large);
  font-weight: var(--weight-medium);
`;

const MyPageInfoOneLiner = styled.div`
  color: var(--color-main);
  font-size: var(--text-medium);
`;

const MyPageEditId = styled.input`
  margin-bottom: var(--x-large);
  color: var(--color-main);
  font-size: var(--text-large);
  font-weight: var(--weight-medium);
  text-align: center;
`;

const MyPageEditOneLiner = styled.input`
  color: var(--color-main);
  font-size: var(--text-medium);
  text-align: center;
`;
