import React from "react";
import styled from "styled-components";

interface ButtonProps {
  type: string;
  onClick?: () => void;
  borderColor?: string;
  bgColor?: string;
  color?: string;
  size?: string;
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
  size,
  radius,
}: ButtonProps) {
  return (
    <ButtonStyled
      type={type === "button" ? "button" : "submit"}
      color={color}
      borderColor={borderColor}
      bgColor={bgColor}
      onClick={onClick}
      size={size}
      radius={radius}
    >
      {children}
    </ButtonStyled>
  );
}

export default Button;

const ButtonStyled = styled.button<ButtonProps>`
  width: ${(props) => (props.size ? `var(${props.size})` : `var(--3x-large)`)};
  height: var(--x-large);
  color: ${(props) =>
    props.color ? `var(${props.color})` : `var(--color-main)`};
  border: none;
  border: 1px solid
    ${(props) =>
      props.borderColor ? `var(${props.borderColor})` : `var(--color-main)`};
  border-radius: ${(props) =>
    props.radius ? `var(${props.radius})` : `var(--xx-small)`};
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
