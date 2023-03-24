import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  type: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  borderColor?: string;
  bgColor?: string;
  color?: string;
  width?: string;
  height?: string;
  radius?: string;
  children?: React.ReactNode;
}

function Button({
  type,
  children,
  onClick,
  borderColor,
  bgColor,
  color,
  width,
  height,
  radius,
}: ButtonProps) {
  return (
    <ButtonStyled
      type={type === 'button' ? 'button' : 'submit'}
      color={color}
      borderColor={borderColor}
      bgColor={bgColor}
      onClick={onClick}
      width={width}
      height={height}
      radius={radius}
    >
      {children}
    </ButtonStyled>
  );
}

export default Button;

const ButtonStyled = styled.button<ButtonProps>`
  width: ${(props) =>
    props.width ? `var(${props.width})` : `var(--3x-large)`};
  height: ${(props) =>
    props.height ? `var(${props.height})` : `var(--x-large)`};
  color: ${(props) =>
    props.color ? `var(${props.color})` : `var(--color-main)`};
  border: none;
  border: 1px solid
    ${(props) =>
      props.borderColor ? `var(${props.borderColor})` : `var(--color-main)`};
  border-radius: ${(props) =>
    props.radius ? `var(${props.radius})` : `var(--2x-small)`};
  background-color: ${(props) =>
    props.bgColor ? `var(${props.bgColor})` : `var(--color-white)`};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${(props) =>
      props.bgColor ? `var(--color-white)` : `var(--color-main)`};
    color: ${(props) =>
      props.color ? `var(--color-main)` : `var(--color-white)`};
    border: 1px solid
      ${(props) =>
        props.borderColor ? `var(${props.borderColor})` : `var(--color-white)`};
  }
`;
