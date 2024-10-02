import styled from "styled-components";
import arrow from "../assets/etc/arrow.svg"
import back from "../assets/etc/Back.svg"
import { PlanetObj } from "./Object";
import { useNavigate } from "react-router-dom";
import Simulator from "./Simulator";
import Ballon from "./Ballon";
import ObjectImg from "./ObjectImg";
import { useState, useRef, useEffect } from "react";
import CheckList from "./CheckList";
import { Down, Up, Left, Right } from "../Functions/Move";

export default function Chat({ Obj, size, left, bottom, anime, id, text }) {
    const navigate = useNavigate();
    const imageSrc = PlanetObj[0][Obj];
    const [input, setInput] = useState("");
    const chatingRef = useRef(null);
    const inputRef = useRef(null);
    const [array, setArray] = useState([
        [2, 2, 2, 2, 2, 2, 2],
        [2, 0, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 1, 2],
        [2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2]
    ]
    );

    const [Text, SetText] = useState(text);

    const TextInput = () => {
        if (input.trim()) {
            const updatedText = [...Text];
            updatedText[id - 1] = [...updatedText[id - 1], { User: true, Text: input, Type: "B" }];
            SetText(updatedText);
            let Temp = input;
            setInput("");
            inputRef.current.focus();

            setTimeout(() => {
                const directionMatch = Temp.match(/(위쪽|아래쪽|오른쪽|왼쪽)\s*(\d*)/g);  // 모든 방향과 숫자 추출
                if (directionMatch) {
                    let totalDelay = 0;  // 각 동작 사이의 지연 시간을 계산하기 위한 변수

                    directionMatch.forEach((match) => {
                        const parts = match.match(/(위쪽|아래쪽|오른쪽|왼쪽)\s*(\d*)/);  // 각각의 매칭 부분 추출
                        const direction = parts[1];  // 방향
                        const steps = parseInt(parts[2], 10) || 1;  // 숫자가 없으면 1로 처리

                        setTimeout(() => {
                            if (direction === "위쪽")
                                Up(array, setArray, steps);
                            else if (direction === "아래쪽")
                                Down(array, setArray, steps);
                            else if (direction === "오른쪽")
                                Right(array, setArray, steps);
                            else if (direction === "왼쪽")
                                Left(array, setArray, steps);
                        }, totalDelay);

                        // 각 움직임 당 지연 시간 추가 (500ms * steps)
                        totalDelay += steps * 500;
                    });
                }
            }, 500);

        }
    };

    const InputEnter = (e) => {
        if (e.key === "Enter") {
            TextInput();
        }
    };

    useEffect(() => {
        if (chatingRef.current) {
            chatingRef.current.scrollTop = chatingRef.current.scrollHeight;
        }
    }, [Text]);

    return (
        <Container>
            <Back onClick={() => navigate(`/`)}>
                <BackArrow src={back} />
                <BackText>뒤로가기</BackText>
            </Back>
            <Simulator array={array} id={id} />
            <ChatBg>
                <Chating ref={chatingRef}>
                    {Text[id - 1].map((item, index) => (
                        item.Type == "B" ?
                            <Ballon key={index} User={item.User} Num={index} Text={item.Text} /> :
                            <CheckList key={index} Text={item.Text} />
                    ))}
                </Chating>
                {
                    imageSrc && <ObjectImg src={imageSrc} size={size} left={left} bottom={bottom} anime={anime} />
                }
                <InputBox>
                    <Input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={InputEnter} />
                    <InputBtn onClick={() => TextInput()}>
                        <Arrow src={arrow} alt="send" />
                    </InputBtn>
                </InputBox>
            </ChatBg>
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    text-align: center;
    height: 100vh;
`

const ChatBg = styled.div`
    position: relative;
    border-radius: 5%;
    background: rgba(255, 255, 255, 0.15);
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

const Chating = styled.div`
    position: absolute;
    background-color: none;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 94%;
    height: 80%;
    bottom: 15%;
    margin: auto;
    z-index:50;

    &::-webkit-scrollbar {
        width: 2vh;
    }
    &::-webkit-scrollbar-track {
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        margin: 2vh;
        border-radius: 50vh;
        background-color: white;
        background-clip: padding-box;
        border: 0.5vh solid transparent;
    }
`

const InputBox = styled.label`
    position: relative;
    background-color: white;
    border: none;
    border-radius: 50vh;
    width: 95%;
    height: 9%;
    bottom: -44%;
    text-align: center;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    position: relative;
    top: 25%;
    margin-left: 4%;
    display: flex;
    border: none;
    font-size:3vh;
    font-weight:525;
    width:80%;
    &:focus {
        outline: none;
    }
`

const InputBtn = styled.button`
    position: absolute;
    width: 7vh;
    height: 7vh;
    border: none;
    border-radius: 100%;
    background-color: #FFD979;
    top: 8%;
    right: 1%;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
        background-color: #ffc83c;
    }

    &:active {
        background-color: #ffc228;
    }
`

const Arrow = styled.img`
    width: 4vh;
    height: 4vh;
`

const Back = styled.div`
    width: 20vh;
    position: absolute;
    left: 2vh;
    top: 4vh;
    font-size: 2.5vh;
    font-weight: bolder;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const BackArrow = styled.img`
    position: absolute;
    top: -1vh;
    left: 2vh;
    width: 3vh;
`
const BackText = styled.span`
    position: absolute;
    top: -1.5vh;
    left: 4vh;
    width: 15vh;
`