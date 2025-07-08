import { useState, useEffect } from "react";
import Stage from "./Stage";
import styled from "styled-components";

export default function Simulator({array, img, title, direction}) {
    const [item, setItem] = useState([]);
    useEffect(() => {
        setItem(img);
    }, []);


    return (
        <SimulBg>
            <Map>
                <tbody>
                    {array.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <Piece key={cellIndex} img={item[cell]}>{
                                    cell == 0 & direction === "RIGHT" ? '→' :
                                    cell == 0 & direction === "LEFT" ? '←' :
                                    cell == 0 & direction === "UP" ? '↑' :
                                    cell == 0 & direction === "DOWN" ? '↓' : ''
                                }</Piece>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Map>
            <Stage title={title}/>
        </SimulBg>
    );
}

const SimulBg = styled.div`
    position: relative;
    width: 90%;
    height: 90%;
    top: 2vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5%;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-select: none;
    overflow: hidden;
`
const Map = styled.table`
    position: absolute;
    width: 80vmin;
    height: 80vmin;
    background-color: rgba(255, 231, 204, 0.7);
    border: 0.5vh solid rgba(0, 0, 0, 0.5);
    border-radius: 5vh;
    border-collapse: collapse;
    top: 1vh;
    overflow: hidden;
`

const Piece = styled.td`
    position: relative;
    width: calc(100% / 7);
    height: calc(100% / 7);
    aspect-ratio: 1 / 1;
    border: 0.5vh solid rgba(0, 0, 0, 0.5);
    background-image: ${({ img }) => `url(${img})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    font-size: 5vh;
    font-weight: 600;
    color: rgba(255, 0, 0, 0.5);
`