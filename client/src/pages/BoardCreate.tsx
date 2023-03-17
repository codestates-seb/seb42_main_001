import styled from 'styled-components';
import { useState } from 'react';

import { BsPlusLg } from 'react-icons/bs';
import BoardCreateTags from '../components/Board/BoardCreateTags';
import BoardCreateBtn from '../components/Board/BoardCreateBtn';
import BoardCreateInput from '../components/Board/BoardCreateInput';
import Button from '../components/UI/Button';
import BoardTagSearch from '../components/Board/BoardTagSearch';

// 테스용 더미 데이터입니다.
const tagData = [
  'date',
  'love',
  'good',
  'test',
  'camping',
  'complete',
  'school',
  'understand',
  'react',
  'typescript',
  'input',
  'output',
  'date',
  'love',
  'good',
  'test',
  'camping',
  'complete',
  'school',
  'understand',
  'react',
  'typescript',
  'input',
  'output',
  'date',
  'love',
  'good',
  'test',
  'camping',
  'complete',
  'school',
  'understand',
  'react',
  'typescript',
  'understand',
  'react',
  'typescript',
  'typescript',
  'input',
  'output',
  'date',
  'love',
  'good',
  'test',
  'camping',
  'complete',
  'school',
  'understand',
  'react',
  'typescript',
  'understand',
  'react',
  'typescript',
];

function BoardCreate() {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

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
            {searchOpen ? (
              <BoardTagSearch tagData={tagData} />
            ) : (
              <BoardCreateTags />
            )}
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
