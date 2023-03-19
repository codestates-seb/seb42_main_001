import styled from "styled-components";

import Card from "../UI/Card";

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
        <TagWrapper>{ele.tagName ? ele.tagName : "데이트"}</TagWrapper>
      </Card>
    </OuterWrapper>
  );
}

export default BoardCreateTag;

const OuterWrapper = styled.li`
  list-style: none;
  margin: var(--xxx-small);
  margin-right: 0;
  cursor: pointer;
`;

const TagWrapper = styled.div`
  width: auto;
  padding: var(--xx-small);
  font-weight: var(--weight-x-small);
  font-size: var(--text-small);
`;