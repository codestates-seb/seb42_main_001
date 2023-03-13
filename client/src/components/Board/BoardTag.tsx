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
  display: flex;
  cursor: pointer;

    div {
      color: var(--color-sub-gray);
      font-size: var(--text-x-small);
      border: 1px solid var(--color-sub-gray);
      border-radius: var(--medium);
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: var(--xxx-samll);
      padding: var(--xx-small);
    }
`;