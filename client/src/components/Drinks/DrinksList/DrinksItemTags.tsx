import React from "react";
import styled from "styled-components";

function DrinksItemTags() {
  return (
    <Body>
      <div>#효도</div>

      <div>#데이트</div>
    </Body>
  );
}

export default DrinksItemTags;

const Body = styled.div`
  display: flex;

    div {
      color: var(--color-sub-gray);
      font-size: var(--text-x-small);
      border: 1px solid var(--color-sub-gray);
      border-radius: var(--radius-large);
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: var(--margin-xxx-samll);
      padding: var( --padding-xx-small);
    }
  `;



// color: var(--color-main);