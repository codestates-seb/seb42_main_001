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
  margin-top: 50px;
  > input {
    width: 350px;
    height: 60px;
    border: 1px solid var(--color-sub-light-gray);
    border-radius: var(--xx-small);
  }
`;

const MyPageInfoId = styled.div`
  margin-bottom: 35px;
  color: var(--color-main);
  font-size: var(--text-large);
  font-weight: 600;
`;

const MyPageInfoOneLiner = styled.div`
  color: var(--color-main);
  font-size: var(--text-medium);
`;

const MyPageEditId = styled.input`
  margin-bottom: 35px;
  color: var(--color-main);
  font-size: var(--text-large);
  font-weight: 600;
  text-align: center;
`;

const MyPageEditOneLiner = styled.input`
  color: var(--color-main);
  font-size: var(--text-medium);
  text-align: center;
`;
