import styled from "styled-components";
import Earth from "./assets/Earth.svg";
import Roket from "./assets/Roket.svg";
import Check from "./assets/Check.svg";

export default function Join() {


    return (
        <div>
            <Center>
                <Step>
                    <IconSvg src={Roket} style={{ left: "-10%", top: "-55px" }} />
                    <IconSvg src={Check} style={{ left: "48%", top: "-10px" }} />
                    <IconSvg src={Earth} style={{ left: "80%", top: "-60px" }} />
                </Step>
            </Center>
            <Title>반가워요,<br />저희와 함께 우주여행을 떠나 볼까요?</Title>
            <InputTable>
                <tr>
                    <Lname>아이디</Lname>npm run 
                    <td><Input placeholder="아이디를 입력해주세요" /></td>
                </tr>
                <tr>
                    <Lname>이메일</Lname>
                    <td><Input placeholder="이메일을 입력해주세요" /></td>
                </tr>
                <tr>
                    <Lname>비밀번호</Lname>
                    <td><Input type="password" placeholder="비밀번호를 입력해주세요" /></td>
                </tr>
                <tr>
                    <Lname>비밀번호 재입력</Lname>
                    <td><Input type="password" placeholder="비밀번호를 다시 입력해주세요" /></td>
                </tr>
            </InputTable>
            <Center>
                <JoinBtn>회원가입</JoinBtn>
            </Center>

        </div>
    );
}

const Center = styled.div`
    margin: 0 auto;
    width: 50%;
    text-align: center;
    margin-top: 40px;
`;


const Step = styled.div`
    position:relative;
    margin: 0 auto;
    width: 580px;
    height: 12px;
    border-radius: 70px;
    background: #ACACAC;
`

const IconSvg = styled.img`
    position:absolute;
`

const Title = styled.h2`
    color:white;
    text-align:center;
    margin-top:50px;
`

const InputTable = styled.table`
    margin:0 auto;
    height:400px;
`

const Input = styled.input`
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

const Lname = styled.td`
    color: white;
    font-size: large;
    font-weight:bolder;
    text-align: right;
`

const JoinBtn = styled.button`
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
    transition: 0.5s;

    &:hover {
        background-color: #c8861b;
        color:lightgray;
    }

    &:active {
        background-color: #7d5311;
        color:gray;
    }
`