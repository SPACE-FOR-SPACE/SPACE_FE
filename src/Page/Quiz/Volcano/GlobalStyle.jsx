import { createGlobalStyle } from "styled-components";
import Bg from "../../../assets/Background/Volcano.svg";

const GlobalStyles = createGlobalStyle`
    body {
        width: 100vw;
        height: 100vh; 
        margin: 0;
        color: ${({ theme }) => theme.textColor};
        background-image: url(${Bg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        overflow: hidden;
        -webkit-user-drag: none;
        -moz-user-drag: none;
        -ms-user-drag: none;
        user-select: none;
    }
`;

export default GlobalStyles;
