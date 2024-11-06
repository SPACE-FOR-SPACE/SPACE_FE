import styled from "styled-components";

export const Center = styled.div`
    margin: 0 auto;
    width: 50%;
    text-align: center;
    margin-top: 50px;
`;


export const Step = styled.div`
    position:relative;
    margin: 0 auto;
    width: 600px;
    height: 20px;
    border-radius: 100vh;
    background: #ACACAC;
`

export const IconSvg = styled.img`
    width: 150px;
    height: 150px;
    top: -5px;
    position:absolute;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-select: none;
    box-shadow: none;
    border: none;
`

export const RoketImg = styled.img`
    width: 120px;
    height: 120px;
    top: -55px;
    z-index: 99;
    position:absolute;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-select: none;
    transition: transform 1s ease;
    box-shadow: none;
    border: none;
`

export const Title = styled.h2`
    color:white;
    text-align:center;
    margin-top:50px;
`

export const InputTable = styled.table`
    margin:0 auto;
    position:relative;
    height:400px;
`

export const Input = styled.input`
    width: 400px;
    height: 30px;
    box-shadow: none;
    outline: none;
    border: none;
    border-bottom: 3px solid #9D9DAE;
    background-color: transparent;
    color: white;
    font-size: large;
    font-weight:bolder;
    margin-left: 50px;
    text-align: left;
    transition: 0.5s;

    &:focus {
        border-bottom: 3px solid white;
    }
`

export const Lname = styled.td`
    color: white;
    font-size: large;
    font-weight:bolder;
    text-align: right;
`

export const JoinBtn = styled.button`
    margin:0 auto;
    color:white;
    font-size: large;
    font-weight:bolder;
    text-align: center;
    background-color: #F9A723;
    width:150px;
    height:50px;
    border:none;
    border-radius:40px;
    cursor: pointer;

    &:hover {
        background-color: #c8861b;
        color:white;
    }

    &:active {
        background-color: #7d5311;
        color:gray;
    }
`

export const EmailCheckBtn = styled.button`
    margin: 0 auto;
    background-color: #090123;
    color: white;
    border: 3px solid white;
    border-radius: 50vh;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
`;

export const Passmsg = styled.div`
    position: absolute;
    left: 190px;
    color: rgba(255, 133, 133, 0.35);
    font-size: 0.8em;
    margin-top: 5px;
    font-weight:bolder;
`;