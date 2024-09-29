import styled from "styled-components";
import Player1 from "../assets/Map/Player_boy.svg"

export default function Simulator() {
    const item = {
        0: Player1,
        1: "목",
        2: "길",
        3: "벽",
        4: "지",
        5: "행",
    }

    const array = [
        [3, 3, 3, 3, 3, 3, 3],
        [3, 0, 2, 2, 2, 2, 3],
        [3, 3, 3, 3, 3, 2, 3],
        [3, 3, 3, 3, 3, 7, 3],
        [3, 3, 3, 3, 3, 2, 3],
        [3, 1, 2, 2, 2, 8, 3],
        [3, 3, 3, 3, 3, 3, 3]
    ];

    return (
        <SimulBg>
            <Map>
                <tbody>
                    {array.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <Piece key={cellIndex} img={item[cell]}></Piece>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Map>
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
    background-color: #D29F65;
    border: 0.5vh solid #875300;
    border-collapse: collapse;
    top: 1vh;
`

const Piece = styled.td`
    position: relative;
    width: calc(100% / 7);
    height: calc(100% / 7);
    aspect-ratio: 1 / 1;
    border: 0.5vh solid #875300;
    background-image: ${({ img }) => `url(${img})`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`