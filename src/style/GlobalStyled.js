import { reset } from "react-style-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    ${reset}

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        color: white;
        background-color: #0C002F;
        font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
    }

    a {
        text-decoration: none;
        color: white;
    }

    ul, ol, li {
        list-style: none;
    }
`;
