import styled from "styled-components";

import Card from "../UI/Card";

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
  margin-left: var(--xxx-small);
`;

const TagWrapper = styled.div`
  width: auto;
  padding: var(--xx-small);
  font-weight: var(--weight-x-small);
  font-size: var(--text-small);
`;
