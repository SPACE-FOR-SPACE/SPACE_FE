import { useNavigate } from "react-router-dom";
import img from '../assets/etc/BackBtn.svg';
import styled from "styled-components";

export default function BackBtn() {
    const navigate = useNavigate()

    return (
        <Btn onClick={() => navigate('/main')}>
            <img src={img} />
        </Btn>
    )
} 

const Btn = styled.button`
    top: 3vh;
    left: 2vh;
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
        width: 6vh;
        height: 6vh;
    }
`