import React from "react";
import styled from "styled-components";

interface CardProps {
  children?: any;
}

function Card({ children }: CardProps) {
  return <CardLayout>{children}</CardLayout>;
}

export default Card;

const CardLayout = styled.div`
  background-color: var(--color-white);
  box-shadow: 1px 1px 20px rgba(181, 181, 181, 0.4);
  border-radius: var(--xx-small);
`;
