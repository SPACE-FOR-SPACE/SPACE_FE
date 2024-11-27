import styled from "styled-components";

export const Center = styled.div`
    margin: 0 auto;
    width: 50%;
    text-align: center;
    margin-top: 40px;
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

export const Title2 = styled.h2`
    color:white;
    text-align:center;
    margin-top:80px;
    margin-bottom:50px;
`

export const Title3 = styled.h2`
    color:white;
    font-size: 30px;
    text-align:center;
    margin-top:80px;
    margin-bottom:0px;
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
    width: 100px;
    height:35px;
    background-color: #090123;
    color: rgba(249, 167, 35, 0.5);
    border: 2px solid #F9A723;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 15px;
    font-family: 'Inter', sans-serif;
    font-weight: bolder;
`;

export const Passmsg = styled.div`
    position: absolute;
    left: 190px;
    color: rgba(255, 133, 133, 0.35);
    font-size: 0.8em;
    margin-top: 5px;
    font-weight:bolder;
`;

export const ConsentBox = styled.div`
    margin: 0 auto;
    border: 1px solid black;
    background-color: #D9D9D9;
    width: 550px;
    height: 150px;
    overflow-x: hidden;
    overflow-y: auto;
`

export const CheckBox = styled.div`
    margin: 0 auto;
    margin-bottom: 10px;
    width: 550px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: 600;
    font-size: 12px;
    color: #5F5A70;
    font-family: 'Inter', sans-serif;

    span {
        margin-right: 0px;
        display: flex;
        align-items: center;
    }

    input[type="checkbox"] {
        width: 15px;
        height: 15px;
        margin-right: 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
`

export const Btn = styled.button`
    top: 30px;
    left: 25px;
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
        width: 40px;
        height: 40px;
    }
`