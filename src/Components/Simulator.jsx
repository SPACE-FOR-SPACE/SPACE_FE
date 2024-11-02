import Stage from "./Stage";
import styled from "styled-components";
import Player1 from "../assets/Map/Player_boy.svg"
import Mushroom from "../assets/Map/Object/mushroom.svg"
import Snake from "../assets/Map/Object/snake.svg"
import Thorn from "../assets/Map/Object/thorn.svg"
import Egg from "../assets/Map/Object/egg.svg"
import Wall from "../assets/Map/Object/wall.svg"

export default function Simulator({array, id}) {
    const item = {
        0: Player1,
        1000: Mushroom,
        // 2: Egg,
        3: Wall,
        // 4: Egg,
        // 5: Egg,
    }
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
            <Stage />
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
`