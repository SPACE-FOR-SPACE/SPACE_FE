import styled, { css, keyframes } from "styled-components";
import LockImg from "../assets/etc/lock.svg"
import { useNavigate } from "react-router-dom";

export default function Planet({ src, size, x1, y1, x2, y2, panime, color, size2, title, lock }) {
    const navigate = useNavigate();
    const LockXY = {
        1: [11, 8],
        2: [9, 10],
        3: [6, 10],
        4: [12, 10],
        5: [11, 8],
    }

    return (
        <Container size={size} x1={x1} y1={y1} panime={panime} onClick={() => {lock ? alert("스테이지가 잠겨있습니다!") : navigate(`/stages/${title}`)}}>
            <PlanetMain src={src} size={size} />
            {lock ? <Lock src={LockImg} alt="lock" x={LockXY[title][0]} y={LockXY[title][1]}/> : 
            <Light size={size} color={color} x2={x2} y2={y2} size2={size2} />}
        </Container>
    )
}

const Pkeyframe1 = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-2vh);
    }
`;

const Pkeyframe2 = keyframes`
    0%, 100% {
        transform: translateY(-2vh);
    }
    50% {
        transform: translateY(0);
    }
`

const Container = styled.div`
    position: absolute;
    cursor: pointer;
    width: ${({ size }) => `${size}vh`};
    height: ${({ size }) => `${size}vh`};
    top: ${({ y1 }) => `${y1}vh`};
    right:${({ x1 }) => `${x1}vh`};
    animation: ${({ panime }) =>
        panime == 1
            ? css`${Pkeyframe1} 5s infinite ease-in-out`
            : css`${Pkeyframe2} 5s infinite ease-in-out`
    };
    z-index:97;
`

const PlanetMain = styled.img`
    position:absolute;
    width: ${({ size }) => `${size}vh`};
    height: ${({ size }) => `${size}vh`};
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-select: none;
    cursor: pointer;
    z-index: 99;
    filter: none; 
    pointer-events: none;
`

const Light = styled.div`
    position: absolute;
    width: ${({ size2 }) => `${size2}vh`};
    height: ${({ size2 }) => `${size2}vh`};
    top: ${({ y2 }) => `${y2}vh`};
    right:${({ x2 }) => `${x2}vh`};
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-select: none;
    cursor: pointer;
    filter: none; 
    border-radius: 100vh;
    background-color: none;
    flex-shrink: 0;
    filter: blur(0vh);
    transform: scale(0.7);
    transition: transform 0.5s, filter 0.5s, background-color 0.5s;
    &:hover {
        background-color: ${({ color }) => `${color}`};
        filter: blur(10vh);
        transform: scale(0.9);
    }
    z-index: 98;
`

const Lock = styled.img `
    cursor: pointer;
    position: absolute;
    width: 10vh;
    height: 10vh;
    z-index: 99;
    top: ${({ y }) => `${y}vh`};
    right:${({ x }) => `${x}vh`};
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-select: none;
`