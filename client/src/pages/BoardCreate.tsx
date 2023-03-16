import styled from 'styled-components';
import { useState } from 'react';

import { BsPlusLg } from 'react-icons/bs';
import BoardCreateTags from '../components/Board/BoardCreateTags';
import BoardCreateBtn from '../components/Board/BoardCreateBtn';
import BoardCreateInput from '../components/Board/BoardCreateInput';
import Button from '../components/UI/Button';
import BoardTagSearch from '../components/Board/BoardTagSearch';

function BoardCreate() {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleTagSearchOpen = () => setSearchOpen(!searchOpen);

  return (
    <Wrapper>
      <div>
        <BoardCreateController>
          <BoardCreateTagController>
            <Button
              onClick={handleTagSearchOpen}
              type="button"
              width={`--x-large`}
              radius={`--large`}
              borderColor={`--color-main`}>
              <SvgSize>
                <BsPlusLg />
              </SvgSize>
            </Button>
            {searchOpen ? <BoardTagSearch /> : <BoardCreateTags />}
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

    @media only screen and (max-width: 768px) {
      width: 100%;
    }
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
  flex-grow: 1;
  position: relative;
`;

const SvgSize = styled.div`
  font-size: var(--small);
  display: flex;
  justify-content: center;
  align-items: center;
`;
