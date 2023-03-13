import { Link } from "react-router-dom";
import styled from "styled-components";

import BoardInfo from "../components/Board/BoardInfo";
import BoardItem from "../components/Board/BoardItem";

function BoardList() {
  return (
    <Wrapper>
      <BoardInfo />
      <ListContainer>
        <Link to="/board/detail">
          <BoardItem />
        </Link>
        <BoardItem />
        <BoardItem />
        <BoardItem />
      </ListContainer>
    </Wrapper>
  );
}

export default BoardList;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListContainer = styled.div`
  margin-bottom: var(--xx-large);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
