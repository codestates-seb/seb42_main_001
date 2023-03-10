import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

/* 그밖의 글로벌 스타일 작성하기 */

:root {
    /* color */
    --color-main: #473F3F;
    --color-sub-dark-gray: #8F8F8F;
    --color-sub-gray: #d0d0d0;
    --color-sub-light-gray: #E4E4E4;
    --color-white: #FFFFFF;

    /* font */
    --x-small-font-size: 11px;
    --small-font-size: 14px;
    --medium-font-size: 18px;
    --large-font-size: 22px;
    --x-large-font-size: 26px;

    /* radius */
    --radius-size: 10px;
}

* {
    font-family: ‘SUIT Variable’, sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
}

div, button {
    letter-spacing: 0.4px;
}

`;
