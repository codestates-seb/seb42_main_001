import styled from "styled-components";

import Card from "../ui/Card";

const TagsBoardItem = () => {
  return (
    <Wrapper>
      <Card>
        <BoardItemContainer />
      </Card>
    </Wrapper>
  );
};

export default TagsBoardItem;

const Wrapper = styled.div`
  margin-bottom: var(--large);
`;

const BoardItemContainer = styled.div`
  width: 690px;
  height: 340px;
`;
