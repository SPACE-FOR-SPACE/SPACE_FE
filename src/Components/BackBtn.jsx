import { useNavigate } from "react-router-dom";
import img from '../assets/etc/BackBtn.svg';
import styled from "styled-components";

export default function BackBtn({title}) {
    const navigate = useNavigate()

    return (
        <Btn onClick={() => navigate(`/${title}`)}>
            <img src={img} />
        </Btn>
    )
} 

const Btn = styled.button`
    top: 3vh;
    left: 3vh;
    position: absolute;
    background-color: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-select: none;
    cursor: pointer;

    img {
        width: 5vh;
        height: 5vh;
        -webkit-user-drag: none;
        -moz-user-drag: none;
        -ms-user-drag: none;
        user-select: none;
    }
`