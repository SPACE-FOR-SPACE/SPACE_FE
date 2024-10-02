import React, { useRef, useEffect } from "react";
import styled from "styled-components";

export default function ObjectImg({ src, size, left, bottom, anime }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        const handleEnded = () => {
            setTimeout(() => {
                video.currentTime = 0;
                video.play();
            }, 15000);
        };

        if (video) {
            video.addEventListener("ended", handleEnded);
        }

        return () => {
            if (video) {
                video.removeEventListener("ended", handleEnded);
            }
        };
    }, [15000]);


    return (
        <div>
            {
                anime == true ?
                <Video ref={videoRef} autoPlay muted loop={false} size={size} left={left} bottom={bottom} >
                    <source src={src}/>
                </Video>:
                <Img src={src} size={size} left={left} bottom={bottom} /> 
            }
        </div>
    )
}

const Img = styled.img`
    position: absolute;
    width: ${({ size }) => `${size}%`};
    height: ${({ size }) => `${size}%`};
    left: ${({ left }) => `${left}%`};
    bottom: ${({ bottom }) => `${bottom}%`};
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-select: none;
    z-index:-1;
`

const Video = styled.video`
    position: absolute;
    width: ${({ size }) => `${size}%`};
    height: ${({ size }) => `${size}%`};
    left: ${({ left }) => `${left}vh`};
    bottom: ${({ bottom }) => `${bottom}vh`};
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-select: none;
    z-index:-1;
    object-fit: cover;
` 