import styled from 'styled-components';

import Card from '../UI/Card';

function BoardCreateTag() {
  return (
    <OuterWrapper>
      <Card>
        <TagWrapper>데이트</TagWrapper>
      </Card>
    </OuterWrapper>
  );
}

export default BoardCreateTag;

const OuterWrapper = styled.li`
  list-style: none;
  margin-right: 5px;
`;

const TagWrapper = styled.div`
  width: auto;
  height: 35px;
  padding: 13px 9px;
  font-weight: var(--weight-x-small);
  font-size: var(--text-small);
  line-height: 16px;
`;
