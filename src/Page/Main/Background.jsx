import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        width: 100%;
        height: 100%;
        margin:0;
        color:${({theme}) => theme.textColor};
        background-image: linear-gradient(225deg, #4D1DAE, #030C30);
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        overflow:hidden;
    }
`

export default GlobalStyles;