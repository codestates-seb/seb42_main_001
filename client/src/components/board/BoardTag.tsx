import styled from 'styled-components';

function BoardTag() {
  return (
    <TagWrapper>
      <div>#효도</div>
    </TagWrapper>
  );
}

export default BoardTag;

const TagWrapper = styled.div`
  margin-right: 12px;
  color: var(--color-sub-gray);
  font-size: var(--x-small-font-size);
  border: 1px solid var(--color-sub-gray);
  border-radius: 50px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
