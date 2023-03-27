import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* 그밖의 글로벌 스타일 작성하기 */
:root {
    /* color */
    --color-main: #473F3F;
    --color-sub-dark-gray: #8F8F8F;
    --color-sub-gray: #D0D0D0;
    --color-sub-light-gray: #E4E4E4;
    --color-white: #FFFFFF;

    /* font-size */
    --text-x-small: 11px;
    --text-small: 14px;
    --text-medium: 18px;
    --text-large: 22px;
    --text-x-large: 26px;

    /* font-weight */
    --weight-x-small: 400;
    --weight-small: 500;
    --weight-medium: 600;
    --weight-large: 700;
    --weight-x-large: 900;

    /* size */
    --3x-small: 8px;//
    --2x-small: 10px;//
    --x-small: 14px;
    --small: 18px;
    --medium: 23px;
    --large: 30px;
    --x-large: 40px;
    --2x-large: 60px;//
    --3x-large: 80px;
    --4x-large: 100px;
    --5x-large: 130px;
}
* {
    font-family: 'SUIT', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
    display: none;
  }
}
a {
    text-decoration: none;
    color: inherit;
}
div, button {
    letter-spacing: 0.4px;
}

`;
