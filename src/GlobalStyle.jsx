import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        width: 100%;
        height: 100%;
        margin:0;
        color:${({theme}) => theme.textColor};
        background-image: linear-gradient(#090123, #0C235C);
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
`

export default GlobalStyles;