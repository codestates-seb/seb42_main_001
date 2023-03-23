import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { boardListFiltered } from '../../redux/slice/board/boardListSlice';
import Card from '../UI/Card';

interface IBoardSearchProps {
  isInput: string;
  setIsInput: (state: string) => void;
}

function BoardSearch({ isInput, setIsInput }: IBoardSearchProps) {
  const data = useAppSelector((state) => state.boardList.listData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(boardListFiltered(isInput));
  }, [isInput, dispatch]);

  const handleDataFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (data) {
      setIsInput(e.target.value.toString());
    }
  };

  return (
    <SearchContainer>
      <Card>
        <input
          placeholder='Search'
          value={isInput}
          onChange={handleDataFilter}
        />
      </Card>
    </SearchContainer>
  );
}

export default BoardSearch;

const SearchContainer = styled.div`
  width: 92%;

  input {
    width: 100%;
    height: 60px;
    border: none;
    outline: none;
    border-radius: var(--2x-small);
    padding-left: var(--medium);
  }
`;
