import { useState, useEffect } from 'react';
import * as S from './style';

export default function Step2({ setStep, step, setInputs, inputs, setErrorMessages, errorMessages }) {
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);

    useEffect(() => {
        let newErrorMessages = { ...errorMessages };
        if (inputs.password !== inputs.confirmPassword) {
            newErrorMessages.confirmPassword = "비밀번호가 일치하지 않습니다. 다시 확인해주세요.";
        } else {
            delete newErrorMessages.confirmPassword;
        }
        setErrorMessages(newErrorMessages);
    }, [inputs.password, inputs.confirmPassword]); // password 또는 confirmPassword가 변경될 때마다 실행

    const NextStep = () => {
        const { username, email, password, confirmPassword } = inputs;
        if (!username || !email || !password || !confirmPassword) {
            alert("항목을 전부 입력해 주세요.");
        } else if (Object.keys(errorMessages).length === 0) {
            setStep(step + 1);
        } else {
            console.log(Object.keys(errorMessages).length)
            console.log(errorMessages);
            alert("입력 양식에 맞춰 입력해 주세요.");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));

        const usernameRegex = /^.{3,15}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{7,15}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let newErrorMessages = { ...errorMessages };

        if (name === "username") {
            if (!usernameRegex.test(value)) {
                newErrorMessages.username = "아이디는 3~15자 사이로 입력해야 합니다.";
            } else {
                delete newErrorMessages.username;
            }
        }

        if (name === "email") {
            setIsEmailSent(false);
            if (!emailRegex.test(value)) {
                newErrorMessages.email = "유효한 이메일 형식이 아닙니다.";
                setIsEmailValid(false);
            } else {
                delete newErrorMessages.email;
                setIsEmailValid(true);
            }
        }

        if (name === "password") {
            if (!passwordRegex.test(value)) {
                newErrorMessages.password = "비밀번호는 7~15자 사이의 영문자와 숫자를 포함해야 합니다.";
            } else {
                delete newErrorMessages.password;
            }
        }

        setErrorMessages(newErrorMessages);
    };

    const emailCheck = () => {
        if (isEmailValid) {
            setIsEmailSent(true);
        } else {
            setErrorMessages(prevErrors => ({
                ...prevErrors,
                email: "유효한 이메일 형식이 아닙니다."
            }));
        }
    };

    return (
        <>
            <S.Title>좋아요! 이제 마지막 단계네요!</S.Title>
            <S.InputTable>
                <tbody>
                    <tr>
                        <S.Lname>아이디</S.Lname>
                        <td>
                            <S.Input
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
                                style={{ width: "300px" }}
                            />
                            <S.EmailCheckBtn onClick={emailCheck}>인증하기</S.EmailCheckBtn>
                            {isEmailSent && isEmailValid ? (
                                <S.Passmsg style={{ color: 'green' }}>인증 메일이 발송되었습니다. 이메일을 확인해 주세요.</S.Passmsg>
                            ) : (
                                <S.Passmsg>{errorMessages.email}</S.Passmsg>
                            )}
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
                            {errorMessages.confirmPassword ? (
                                <S.Passmsg>{errorMessages.confirmPassword}</S.Passmsg>
                            ) : inputs.password ? (
                                <S.Passmsg style={{ color: 'green' }}>비밀번호가 일치합니다.</S.Passmsg>
                            ) : (
                                ""
                            )}
                        </td>
                    </tr>
                </tbody>
            </S.InputTable>
            <S.Center>
                <S.JoinBtn onClick={NextStep}>
                    회원가입
                </S.JoinBtn>
            </S.Center>
        </>
    );
}
