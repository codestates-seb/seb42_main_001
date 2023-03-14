import styled from "styled-components";

import { BsPlusLg } from "react-icons/bs";
import BoardCreateTags from "../components/Board/BoardCreateTags";
import BoardCreateBtn from "../components/Board/BoardCreateBtn";
import BoardCreateInput from "../components/Board/BoardCreateInput";
import Button from "../components/UI/Button";

function BoardCreate() {
  return (
    <Wrapper>
      <div>
        <BoardCreateController>
          <BoardCreateTagController>
            <Button
              type="button"
              size={`--x-large`}
              radius={`--large`}
              borderColor={`--color-main`}
            >
              <SvgSize>
                <BsPlusLg />
              </SvgSize>
            </Button>
            <BoardCreateTags />
          </BoardCreateTagController>
          <BoardCreateBtn />
        </BoardCreateController>
        <BoardCreateInput />
      </div>
    </Wrapper>
  );
}

export default BoardCreate;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;

  > div {
    width: 70%;
    height: auto;
  }
`;

const BoardCreateController = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoardCreateTagController = styled.div`
  display: flex;
  align-items: center;
`;

const SvgSize = styled.div`
  font-size: var(--small);
  display: flex;
  justify-content: center;
  align-items: center;
`;
