import GlobalStyles from "./GlobalStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as S from './style'
import naver from "../../assets/etc/Login/naver.svg";
import google from "../../assets/etc/Login/google.svg";
import kakao from "../../assets/etc/Login/kakao.svg";
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const InputChange = (e) => {
        const { name, value } = e.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    async function Submit() {
        const { email, password } = input;

        try {
            const response = await axios.post(
                'https://658b-211-182-230-53.ngrok-free.app/login',
                {
                    email: email,
                    password: password
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log('로그인 성공:', response.data);
            navigate(`/`);

        } catch (error) {
            alert("다시 입력해주세요");
            console.error('로그인 실패:', error);
        }
    }
    return (
        <>
            <GlobalStyles />
            <S.Title>환영해요!</S.Title>
            <S.InputTable>
                <tbody>
                    <tr>
                        <S.Lname>이메일</S.Lname>
                        <td><S.Input name="email" onChange={InputChange} value={input.email} placeholder="이메일를 입력해주세요" /></td>
                    </tr>
                    <tr>
                        <S.Lname>비밀번호</S.Lname>
                        <td><S.Input name="password" onChange={InputChange} value={input.password} type="password" placeholder="비밀번호를 입력해주세요" /></td>
                    </tr>
                    <S.Info>
                        <td></td>
                        <td>아이디 / 비밀번호 찾기</td>
                    </S.Info>
                </tbody>
            </S.InputTable>
            <S.Center>
                <S.LoginIcon src={naver} />
                <S.LoginIcon src={google} />
                <S.LoginIcon src={kakao} />
            </S.Center>
            <S.Center>
                <S.LoginBtn onClick={() => Submit()}>로그인</S.LoginBtn>
                <S.JoinContainer>
                    <S.SText>아직 회원이 아니세요? </S.SText>
                    <S.Join onClick={() => navigate(`/join`)}>회원가입</S.Join>
                </S.JoinContainer>
            </S.Center>

        </>
    )
}