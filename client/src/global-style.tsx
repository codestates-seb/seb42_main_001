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
    --weight-large: 700;
    --weight-x-large: 900;

    /* radius */
    --radius-size: 10px;
    --radius-large: 20px;
    --radius-x-large: 30px;

    /* padding */
    --padding-xx-small: 10px;
    --padding-x-small: 14px;
    --padding-small: 18px;
    --padding-medium: 23px;
    --padding-large: 30px;

    /* margin */
    --margin-xxx-samll: 8px;
    --margin-xx-samll: 10px;
    --margin-x-samll: 14px;
    --margin-samll: 18px;
    --margin-medium: 23px;
    --margin-large: 30px;
    --margin-x-large: 40px;
    --margin-xxx-large: 60px;
}

* {
    font-family: ‘SUIT Variable’, sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
    color: inherit;
}

div, button {
    letter-spacing: 0.4px;
}

`