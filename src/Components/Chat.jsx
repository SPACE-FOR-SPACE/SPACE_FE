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
import axios from "axios";
import { Down, Up, Left, Right } from "../Functions/Move";

const API_URL = "https://port-0-space-server-m1oxeihpad978327.sel4.cloudtype.app";

export default function Chat({ Obj, size, left, bottom, anime, id, text, map }) {
    const navigate = useNavigate();
    const imageSrc = PlanetObj[0][Obj];
    const [input, setInput] = useState("");
    const chatingRef = useRef(null);
    const inputRef = useRef(null);
    const [array, setArray] = useState([]);
    const [load, setLoad] = useState(false);
    const [Text, setText] = useState([]);

    useEffect(() => {
        setText(text)
        setArray(map);
    }, []);

    const TextInput = () => {
        if (input.trim()) {
            const Chating = async () => {
                try {
                    const newText = [...Text, { User: true, Text: input, Type: "B" }];
                    setText(newText);
                    const Temp = input;
                    setInput("");
                    inputRef.current.focus();

                    setLoad(true);

                    const loadingText = { User: false, Text: "...", Type: "B" };
                    setText(prevText => [...prevText, loadingText]);

                    const response = await axios.post(
                        `${API_URL}/chats/${id}`,
                        {
                            userChat: Temp,
                            type: 'CODE'
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            withCredentials: true
                        }
                    );

                    setText(prevText => {
                        const updatedText = prevText.filter(item => item.Text !== "...");
                        return [...updatedText, { User: false, Text: response.data.feedback, Type: "B" }];
                    });
                    const moves = response.data.move;
                    for (const direction of moves) {
                        await new Promise(resolve => {
                            setTimeout(() => {
                                switch (direction) {
                                    case 'r':
                                        Right(array, setArray);
                                        break;
                                    case 'l':
                                        Left(array, setArray);
                                        break;
                                    case 'u':
                                        Up(array, setArray);
                                        break;
                                    case 'd':
                                        Down(array, setArray);
                                        break;
                                    default:
                                        console.warn(`알 수 없는 방향: ${direction}`);
                                }
                                resolve();
                            }, 500);
                        });
                    }

                } catch (error) {
                    console.error('실패', error);
                    console.error('에러 응답:', error.response);
                    setText(prevText => {
                        const updatedText = prevText.filter(item => item.Text !== "...");
                        return [...updatedText, { User: false, Text: "죄송합니다. 오류가 발생했습니다.", Type: "B" }];
                    });
                }
                setLoad(false);
            };
            Chating();
        }
    };

    const InputEnter = (e) => {
        if (e.key === "Enter" && !load) {
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
                    {Text.map((item, index) => (
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
                    <InputBtn onClick={() => TextInput()} disabled={load}>
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
