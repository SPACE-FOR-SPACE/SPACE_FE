import { createGlobalStyle } from "styled-components";
import plant from "../../assets/Background/plant.svg";
import volcano from "../../assets/Background/volcano.svg";
import sea from "../../assets/Background/sea.svg";

const backgrounds = {
    plant: plant,
    volcano: volcano,
    sea: sea,
};

const GlobalStyles = createGlobalStyle`
    body {
        width: 100vw;
        height: 100vh; 
        margin: 0;
        background-image: ${({ bg }) => `url(${backgrounds[bg]})`}; 
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

const QuizBg = ({ $bg }) => {
    return <GlobalStyles bg={$bg} />;
};

export default QuizBg;