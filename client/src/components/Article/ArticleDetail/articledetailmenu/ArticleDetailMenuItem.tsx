// import { useState } from 'react';
import styled from 'styled-components';
import Card from '../../../UI/Card';

interface MenuItemProps {
  title: string;
  value: number;
  handlIdChange: (value: number) => void;
  isActive: number;
}

function ArticleDetailMenuItem({ title, value, handlIdChange, isActive }: MenuItemProps) {
  return (
    <MainContainer isActive={isActive}>
      <Card>
        <SizeContainer isActive={isActive === value} onClick={() => handlIdChange(value)}>
          {title}
        </SizeContainer>
      </Card>
    </MainContainer >
  );
}

export default ArticleDetailMenuItem;

const MainContainer = styled.div<{ isActive: number }>`
  width: 100%;
  height: 100%;
  margin-bottom: var(--small);
  color: var(--color-main);
  opacity: 1;
  font-weight: var(--weight-small);
  transition: 0.4s;
`;

const SizeContainer = styled.button<{ isActive: any }>`
  cursor: pointer;
  width: 100%;
  display: flex;
  border: 0;
  color: var(--color-main);
  border-radius: var(--3x-small);
  background-color: ${(props) => (props.isActive ? `var(--color-white)` : `rgba(57, 50, 50, 0.5)`)};
  padding: var(--medium);
  transition: 0.4s;
  opacity: 1;

  &:hover {
    opacity: 0.8;
    background-color: var(--color-white);
    transition: 0.4s;
    color: black;
    }
`;
