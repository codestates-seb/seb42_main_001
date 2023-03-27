import styled from 'styled-components';

import Card from '../UI/Card';

interface props {
  ele: {
    tagId: number;
    tagName: string;
  };
  onClick: (ele: { tagId: number; tagName: string }) => void;
}

function BoardCreateTag({ ele, onClick }: props) {
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
`;
