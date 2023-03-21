import styled from "styled-components";

import Card from "../UI/Card";
import BoardSuggestList from "./BoardSuggestList";

export interface RecommandBoards {
  recommandBoards?: Array<{
    boardId: number;
    boardTitle: string;
  }>;
}

function BoardSuggest({ recommandBoards }: RecommandBoards) {
  return (
    <OuterContainer>
      <Card>
        <InnerContainer>
          <div>추천 보드</div>
          <BoardSuggestList recommandBoards={recommandBoards} />
        </InnerContainer>
      </Card>
    </OuterContainer>
  );
}

export default BoardSuggest;

const OuterContainer = styled.div`
  width: 370px;
  height: auto;
  max-height: 600px;
  position: absolute;
  top: 130px;
  left: 1000px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const InnerContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;

  > div {
    font-weight: var(--weight-large);
    font-size: var(--text-medium);
    line-height: 21px;
    margin-bottom: 25px;
  }
`;
