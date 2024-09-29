import { useRef } from "react";
import styled from "styled-components";
import Bg from "../../../assets/Object/Plant/Background.mp4"

export default function Background() {
    const videoRef = useRef(null);
    
    return (
        <PlantBg ref={videoRef} autoPlay muted loop>
            <source src={Bg}>
            </source>
        </PlantBg>
    )
}

const PlantBg = styled.video `
    position: absolute;
    width:100vw;
    height:100vh;
    object-fit: cover;
    z-index: -1;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-select: none;
`