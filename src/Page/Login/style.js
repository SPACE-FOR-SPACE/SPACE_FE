import styled from "styled-components";

export const LoginIcon = styled.img`
    margin-top: -100px;
    width: 6vh;
    height: 6vh;
    padding-left: 2vh;
    padding-right: 2vh;
    cursor: pointer;
`

export const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    color:white;
    text-align:center;
    margin-top:200px;
`

export const InputTable = styled.table`
    margin:0 auto;
    margin-top: 50px;
    height:200px;
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

export const LoginBtn = styled.button`
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
    /* transition: 0.5s; */

    &:hover {
        background-color: #c8861b;
        color:white;
    }

    &:active {
        background-color: #7d5311;
        color:gray;
    }
`

export const Center = styled.div`
    margin: 0 auto;
    width: 50%;
    text-align: center;
    margin-top: 40px;
`;

export const Info = styled.tr`
    position: relative;
    top: -30px;
    font-weight: bold;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.4);
    text-align: right;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-select: none;
    cursor: pointer;
    text-decoration:none;
    &:hover {
        text-decoration:underline;
    }
`

export const JoinContainer = styled.div`
    margin-top: 15px;
`

export const Join = styled.span`
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
     user-select: none;
    font-size: 12px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    text-align: center;
    cursor: pointer;
    text-decoration:none;
    &:hover {
        text-decoration:underline;
    }
`

export const SText = styled.span `
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-select: none;
    font-size: 12px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.4);
    text-align: center;
    cursor: default;
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