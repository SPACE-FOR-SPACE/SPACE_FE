import GlobalStyles from "../BasicBg";
import styled, { keyframes } from "styled-components";
import redRoket from "../../assets/etc/Video/red-spaceship.webm"
import blueRoket from "../../assets/etc/Video/blue-spaceship.webm"
import { useEffect, useRef, useState } from "react";


export default function Loading() {
    const videoRef = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return loading ? (
        <>
            <GlobalStyles />
            <Container>
                <Roket ref={videoRef} autoPlay muted loop>
                    <source src={blueRoket} type="video/webm" />
                </Roket>
                <Load>
                    <Point t={0} />
                    <Point t={0.5} />
                    <Point t={1} />
                    <Point t={1.5} />
                    <Point t={2} />
                </Load>
            </Container>
        </>
    ) : null;
}

const RoketAnime = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-3vh);
    }
`;

const LoadAnime = keyframes`
    0%, 100% {
        background-color: white;
    }
    50% {
        background-color: #FFDE09;
    }
`;

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const Roket = styled.video`
    width: 20vh;
    height: auto;
    margin-top: -10vh;
    animation: ${RoketAnime} 3s infinite ease-in-out;
`

const Load = styled.div`
    position: absolute;
    top: 55vh;
    width: 50vh;
    height: 5vh;
`

const Point = styled.div`
    float: left;
    margin-left: 4vh;
    margin-right: 4vh;
    background-color: white;
    width: 2vh;
    height: 2vh;
    border-radius: 100vh;
    animation: ${LoadAnime} 2s infinite ease-in-out;
    animation-delay: ${({ t }) => `${t}s`};
`