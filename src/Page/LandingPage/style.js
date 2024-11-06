import styled from "styled-components";
import { createGlobalStyle, keyframes } from "styled-components";

export const Header = styled.header`
    display: flex;
    position: fixed;
    top: 0px;
    width: 100vw;
    height: 10vh;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-size: 2.5vh;
    font-family: 'Noto Sans KR', sans-serif;
    z-index: 99;
`

export const Left = styled.div`
    display: flex;
    margin-left: 5vh;
    align-items: center;
`

export const Right = styled.div`
    display: flex;
    margin-right: 10vh;
    align-items: center;
`

export const Title = styled.span`
    cursor: pointer;
    font-size: 4vh;
    font-weight: bold;
    color: #F9A723;
    margin: 0 1.5vw;
`

export const Menu = styled.span`
    cursor: pointer;
    margin: 0 1.2vw;
    font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
    color: ${({ active }) => (active ? 'orange' : 'white')};
    text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
`

export const Sign = styled.span`
    cursor: pointer;
    color: ${props => props.color};
    margin: 0 1vw;
`

export const Section = styled.section`
    position: relative;
    display: flex;
    width: 100vw;
    height: 110vh;
    /* background-color: aqua; */
    margin-bottom: 10vh;

    .Plant1 {
        top: 10vh;
        position: absolute;
        width: 70vh;
        height: auto;
        display: block;
        -webkit-user-drag: none;
        -moz-user-drag: none;
        -ms-user-drag: none;
        user-select: none;
    }

    .Plant2 {
        top: 50%;
        right: -25%;
        position: absolute;
        width: 50%;
        height: auto;
        display: block;
        -webkit-user-drag: none;
        -moz-user-drag: none;
        -ms-user-drag: none;
        user-select: none;
        transform: translate(-50%, -50%);
    }
`

export const Light = styled.div`
    position: absolute;
    width: ${({ size }) => `${size}vh`};
    height: ${({ size }) => `${size}vh`};
    top: ${({ y }) => `${y}vh`};
    left: ${({ x }) => `${x}vh`};
    border-radius: 100vh;
    background-color: ${({ color }) => `${color}`};
    filter: blur(8vw);
    z-index: -1;
`

export const MainTitle1 = styled.h1`
    position: absolute;
    width: 75vw;
    top: 30vh;
    right: 0vh;
    text-align: center;
    color: white;
    font-size: 10vh;
    font-weight: 700;
    font-family: 'JetBrains Mono';
`

export const TitleWithText = styled.div`
    position: relative;
    width: 50vw;
    text-align: center;
    margin: 20px 0;
`;

export const MainTitle2 = styled.h1`
    position: absolute;
    width: auto;
    top: 20vh;
    left: 15vh;
    text-align: center;
    color: white;
    font-size: 8vh;
    font-weight: 700;
    font-family: 'JetBrains Mono';
`

export const Text = styled.div `
    position: absolute;
    text-align: left;
    line-height: 6vh;
    top: 40vh;
    left: 15vh;
    color: white;
    font-size: 3vh;
    font-family: 'JetBrains Mono';
`

export const Btn = styled.div`
    position: absolute;
    width: 75vw;
    top: 50vh;
    right: 0vh;
    text-align: center;
    color: white;
    font-size: 10vh;
    font-weight: 700;
`

export const StartBtn = styled.button`
    color:white;
    font-size: large;
    font-weight:bolder;
    text-align: center;
    background-color: #F9A723;
    width:25vh;
    height:7vh;
    border:none;
    border-radius:20vh;
    font-size: 3.5vh;
    cursor: pointer;
`

export const Star = styled.img`
    position: absolute;
    display: block;
    width: 10.25vh;
    height: auto;
    top: ${({ y }) => `${y}vh`};
    left:${({ x }) => `${x}vw`};
    object-fit: cover;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-select: none;
`

export const Element = styled.img`
    position: absolute;
    display: block;
    width: ${({ size }) => `${size}vh`};
    height: auto;
    top: ${({ y }) => `${y}vh`};
    left:${({ x }) => `${x}vw`};
    object-fit: cover;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-select: none;
`

export const Body = createGlobalStyle`
    body {
        width: 100%;
        height: 600vh;
        margin:0;
        overflow-x: hidden;
        background-image: linear-gradient(#090220 0%, #09104C 41%, #05071C 60%);
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: scroll;
    }
`

export const Ring = styled.div`
    position: absolute;
    width:800vh;
    height: 80vh;
    top: ${({ top }) => `${top}vh`};
    left:${({ left }) => `${left}vh`};
    border-radius: 50%;
    border: 2vh solid #4D1DAE;
    transform: rotate(-40deg);
    z-index:-1;
    opacity: 0.3;   
`

export const Marquee = keyframes`
    0% { transform: translateX(10%); }
    50% { transform: translateX(50%); }
    100% { transform: translateX(10%); }
`

export const MarqueeStyle = styled.div`
    display: inline-block;
    white-space: nowrap;
    animation: ${Marquee} 1.5s linear infinite;
`