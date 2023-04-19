import styled from 'styled-components';

import Card from '../../UI/Card';
import { ICreateTag } from '../../../util/interfaces/boards.interface';

function BoardCreateTag({ ele, onClick }: ICreateTag) {
  return (
    <OuterWrapper onClick={() => onClick(ele)}>
      <Card>
        <TagWrapper>{ele.tagName}</TagWrapper>
      </Card>
    </OuterWrapper>
  );
}

export default BoardCreateTag;

const OuterWrapper = styled.li`
  list-style: none;
  margin: var(--3x-small);
  margin-right: 0;
  cursor: pointer;
`;

const TagWrapper = styled.div`
  width: auto;
  padding: var(--2x-small);
  font-weight: var(--weight-x-small);
  font-size: var(--text-small);
  white-space: nowrap;
`;
