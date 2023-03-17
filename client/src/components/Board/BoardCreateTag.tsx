import styled from 'styled-components';

import Card from '../UI/Card';

interface props {
  ele?: string;
}

function BoardCreateTag({ ele }: props) {
  return (
    <OuterWrapper>
      <Card>
        <TagWrapper>{ele ? ele : '데이트'}</TagWrapper>
      </Card>
    </OuterWrapper>
  );
}

export default BoardCreateTag;

const OuterWrapper = styled.li`
  list-style: none;
  margin: var(--xxx-small);
  margin-right: 0;
`;

const TagWrapper = styled.div`
  width: auto;
  padding: var(--xx-small);
  font-weight: var(--weight-x-small);
  font-size: var(--text-small);
`;
