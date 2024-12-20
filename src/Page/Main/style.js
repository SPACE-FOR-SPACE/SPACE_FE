import styled from "styled-components";

export const Ring = styled.div`
    position: absolute;
    top: ${({ top }) => `${top}vh`};
    right:${({ right }) => `${right}vh`};
    width: ${({ x }) => `${x}vh`};
    height: ${({ y }) => `${y}vh`};;
    border-radius: 50%;
    border: 1vh solid #4D1DAE;
    transform: rotate(-15deg);
    z-index:1;
`
export const Sun = styled.img`
    position: absolute;
    top:-120vh;
    right: -100vh;
    width: 200vh;
    height: 200vh;
    z-index:2;
`

