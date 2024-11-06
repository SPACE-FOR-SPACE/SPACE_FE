import Roket from "../../assets/etc/Roket.svg";
import Check from "../../assets/etc/Check.svg";
import * as S from './style';
import GlobalStyles from '../BasicBg.jsx';
import { useState, useEffect } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

export default function Join() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [errorMessages, setErrorMessages] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
    });

    useEffect(() => {
        const { username, email, password, confirmPassword } = inputs;
        if (username && email && password && confirmPassword) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [inputs]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));

        const usernameRegex = /^.{3,15}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,15}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let newErrorMessages = errorMessages;

        if (name === "username" && !usernameRegex.test(value)) {
            newErrorMessages.username = "아이디는 3~15자 사이로 입력해야 합니다.";
        }
        if (name === "email" && !emailRegex.test(value)) {
            newErrorMessages.email = "유효한 이메일 형식이 아닙니다.";
        }
        if (name === "password" && !passwordRegex.test(value)) {
            newErrorMessages.password = "비밀번호는 7~15자 사이의 영문자와 숫자를 포함해야 합니다.";
        }
        if (name === "confirmPassword" && !(inputs.password == value)) {
            newErrorMessages.confirmpassword = "비밀번호가 일치하지 않습니다. 다시 확인해주세요.";
        }
        setErrorMessages(newErrorMessages);
    };

    const Submit = async () => {
        const { username, email, password } = inputs;

        try {
            await axios.post(
                '/api/join',
                {
                    email: email,
                    username: username,
                    password: password,
                    age: 13
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );
            console.log('회원가입 성공');
            navigate(`/login`);

        } catch (error) {
            console.error('회원가입 실패:', error);
        }
    };

    const NextStep = () => {}

    return (
        <div>
            <GlobalStyles />
            <S.Center>
                <S.Step>
                    <S.RoketImg src={Roket} style={{
                        transform: step === 1 ? "translateX(-300%)"
                            : step === 2 ? "translateX(-50%)" : "translateX(190%)",
                    }} />
                    <>
                        <S.IconSvg src={Check} style={{ left: "-3%" }} />
                        <S.IconSvg src={Check} style={{ left: "45%" }} />
                        <S.IconSvg src={Check} style={{ left: "95%" }} />
                    </>
                </S.Step>
            </S.Center>
            <S.Title>저희와 함께 우주여행을 떠나 볼까요?</S.Title>
            <S.InputTable>
                <tbody>
                    <tr>
                        <S.Lname>아이디</S.Lname>
                        <td><S.Input
                            name="username"
                            placeholder="아이디를 입력해주세요"
                            value={inputs.username}
                            onChange={handleInputChange}
                        />
                            <S.Passmsg>{errorMessages.username}</S.Passmsg>
                        </td>
                    </tr>
                    <tr>
                        <S.Lname>이메일</S.Lname>
                        <td>
                            <S.Input
                                name="email"
                                placeholder="이메일을 입력해주세요"
                                value={inputs.email}
                                onChange={handleInputChange}
                            />
                            {/* <S.EmailCheckBtn>이메일 인증</S.EmailCheckBtn> */}
                            <S.Passmsg>{errorMessages.email}</S.Passmsg>
                        </td>
                    </tr>
                    <tr>
                        <S.Lname>비밀번호</S.Lname>
                        <td>
                            <S.Input
                                name="password"
                                type="password"
                                placeholder="비밀번호를 입력해주세요"
                                value={inputs.password}
                                onChange={handleInputChange}
                            />
                            <S.Passmsg>{errorMessages.password}</S.Passmsg>
                        </td>
                    </tr>
                    <tr>
                        <S.Lname>비밀번호 재입력</S.Lname>
                        <td>
                            <S.Input
                                name="confirmPassword"
                                type="password"
                                placeholder="비밀번호를 다시 입력해주세요"
                                value={inputs.confirmPassword}
                                onChange={handleInputChange}
                            />
                            <S.Passmsg>{errorMessages.confirmpassword}</S.Passmsg>
                        </td>
                    </tr>
                </tbody>
            </S.InputTable>
            <S.Center>
                <S.JoinBtn
                    onClick={() => NextStep()}
                    disabled={!isFormValid} >
                    회원가입
                </S.JoinBtn>
            </S.Center>
        </div>
    );
} 