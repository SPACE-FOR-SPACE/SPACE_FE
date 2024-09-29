import styled from "styled-components";
import arrow from "../assets/etc/arrow.svg"
import back from "../assets/etc/Back.svg"
import { PlanetObj } from "./Object";
import { useNavigate } from "react-router-dom";
import Simulator from "./Simulator";
import Ballon from "./Ballon";
import { useState, useRef, useEffect } from "react";

export default function Chat({Obj, size, left, bottom}) {
    const navigate = useNavigate();
    const imageSrc = PlanetObj[0][Obj];
    const [input, setInput] = useState(""); 
    const [Text, SetText] = useState([]);
    const chatingRef = useRef(null);
    const inputRef = useRef(null);

    const TextInput = () => {
        if (input.trim()) {
            SetText([...Text, input]);
            setInput("");
            inputRef.current.focus();
        }
    };

    const InputEnter = (e) => {
        if (e.key === "Enter") {
            TextInput();
        }
    };

    useEffect(() => {
        if (chatingRef.current) {
            chatingRef.current.scrollTop = chatingRef.current.scrollHeight; // 강제적으로 스크롤을 맨 아래로
        }
    }, [Text]);

    return (
        <Container>
            <Back onClick={() => navigate(`/`)}>
                <BackArrow src={back} />
                <BackText>뒤로가기</BackText>
            </Back>
            <Simulator />
            <ChatBg>
                <Chating ref={chatingRef}>
                    {Text.map((item, index) => (
                        <Ballon key={index} Text={item}/>
                    ))}
                </Chating>
                {
                    imageSrc && <ObjImg src={imageSrc} size={size} left={left} bottom={bottom}/>
                }
                <InputBox>
                    <Input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={InputEnter}/>
                    <InputBtn onClick={() => TextInput()}>
                        <Arrow src={arrow} alt="send" />
                    </InputBtn>
                </InputBox>
            </ChatBg>
        </Container>
    );
}

const Container = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    text-align: center;
    height: 100vh;
`

const ChatBg = styled.div `
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

const Chating = styled.div `
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

const ObjImg = styled.img `
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

const InputBox = styled.label `
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

const Input = styled.input `
    position: relative;
    top: 30%;
    margin-left: 5%;
    display: flex;
    border: none;
    font-size:3vh;
    font-weight:525;
    width:80%;
    &:focus {
        outline: none;
    }
`

const InputBtn = styled.button `
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

const Arrow = styled.img `
    width: 4vh;
    height: 4vh;
`

const Back = styled.div `
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

const BackArrow = styled.img `
    position: absolute;
    top: -1vh;
    left: 2vh;
    width: 3vh;
`
const BackText = styled.span `
    position: absolute;
    top: -1.5vh;
    left: 4vh;
    width: 15vh;
`