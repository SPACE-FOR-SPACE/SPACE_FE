import { useEffect, useState } from "react";
import img from '../../../assets/etc/BackBtn.svg';
import logout from '../../../assets/etc/Logout.svg';
import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    background-color: #001f3f;
    color: white;
    padding: 10px 20px;
`;

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 40px;
`;

const Title = styled.h1`
    font-size: 20px;
    margin-right: 10px;
`;

const Btn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
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
        width: 30px;
        height: 30px;
        -webkit-user-drag: none;
        -moz-user-drag: none;
        -ms-user-drag: none;
        user-select: none;
    }
`

export default function Header() {
    const [user, setUser] = useState('김민주');

    return (
        <HeaderContainer>
            <Btn>
                <img src={img} />
            </Btn>
            <RightContainer>
                <Title>안녕하세요, {user}님!</Title>
                <Btn>
                    <img src={logout} />
                </Btn>
            </RightContainer>
        </HeaderContainer>
    )
}