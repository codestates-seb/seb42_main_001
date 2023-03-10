import React from 'react'
import styled from 'styled-components';

interface ButtonProps {
    children?: string;
    onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {

  return (
    <ButtonStyled onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}

export default Button

const ButtonStyled = styled.button`
    width: 75px;
    height: 40px;
    color: var(--color-main);
    border: none;
    border: 1px solid var(--color-main);
    border-radius: var(--xx-small);
    background-color: var(--color-white);
    cursor: pointer;
`