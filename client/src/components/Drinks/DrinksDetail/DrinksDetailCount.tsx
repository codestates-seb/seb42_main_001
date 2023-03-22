import React from 'react'
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import styled from 'styled-components';
import { DrinksDetailProps } from '../../../interfaces/Drinks.inerface'


function DrinksDetailCount({ drinksDetail }: DrinksDetailProps) {
    return (
        <LikesSize>
            <HiOutlineChatBubbleOvalLeft />
            <span>
                {drinksDetail?.commentDrinks.length}
            </span>
        </LikesSize>
    )
}

export default DrinksDetailCount

const LikesSize = styled.div`
  color: var(--color-main);
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: var(--text-x-large);
    color: var(--color-main);
  }
  span {
    font-size: var(--text-small);
    margin-left: var(--3x-small);
  }
`