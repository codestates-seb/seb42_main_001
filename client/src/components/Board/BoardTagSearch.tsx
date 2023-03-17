import styled from 'styled-components';
import { useState } from 'react';

import Card from '../UI/Card';
import BoardCreateTag from './BoardCreateTag';

interface props {
  tagData: Array<string>;
}

function BoardTagSearch({ tagData }: props) {
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState(tagData);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setOptions(tagData.filter(ele => ele.includes(e.target.value)));
  };

  return (
    <Container>
      <Card>
        <input
          type="text"
          value={inputValue}
          placeholder="Search"
          onChange={handleInputValue}
        />
        {options.length ? (
          <DropDown>
            {options.map((ele, idx) => (
              <BoardCreateTag key={idx} ele={ele}></BoardCreateTag>
            ))}
          </DropDown>
        ) : null}
      </Card>
    </Container>
  );
}

export default BoardTagSearch;

const Container = styled.div`
  margin: 0 10px;
  position: absolute;
  top: 0;
  left: 40px;
  z-index: 1;

  input {
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    background-color: transparent;
    padding-left: var(--medium);
  }
`;

const DropDown = styled.div`
  padding: 10px;
  border-top: 1px solid var(--color-sub-light-gray);
  display: flex;
  flex-wrap: wrap;
`;
