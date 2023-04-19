import React, { useState } from 'react';
import styled from 'styled-components';

import BoardCreate from './BoardCreate';
import BoardSearch from './BoardSearch';
import { AiOutlineSearch } from 'react-icons/ai';
import Button from '../../ui/Button';
import { IBoardInfo } from '../../../util/interfaces/boards.interface';

function BoardInfo({ isSearch, setIsLoading, setInput }: IBoardInfo) {
  const [isInput, setIsInput] = useState('');

  const handleSearchChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsLoading(isSearch ? false : true);
  };

  return (
    <InfoContainer>
      {isSearch ? (
        <BoardSearch
          isInput={isInput}
          setIsInput={setIsInput}
          setInput={setInput}
        />
      ) : (
        <MarginDiv>
          <BoardCreate />
        </MarginDiv>
      )}
      <Button
        type='button'
        width={`--x-large`}
        radius={`--large`}
        color={`--color-white`}
        bgColor={`--color-main`}
        borderColor={`--color-main`}
        onClick={handleSearchChange}
      >
        <SvgSize>
          <AiOutlineSearch />
        </SvgSize>
      </Button>
    </InfoContainer>
  );
}

export default BoardInfo;

const InfoContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MarginDiv = styled.div`
  width: 93%;
  margin-right: var(--x-small);
  display: flex;
  justify-content: end;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

const SvgSize = styled.div`
  font-size: var(--small);
  display: flex;
  justify-content: center;
  align-items: center;
`;
