import Roket from "../../assets/etc/Roket.svg";
import Check from "../../assets/etc/Check.svg";
import * as S from './style';
import GlobalStyles from '../BasicBg.jsx';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://port-0-space-server-m1oxeihpad978327.sel4.cloudtype.app";

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
    };

    const Submit = async () => {
        const { username, email, password } = inputs;

        try {
            const response = await axios.post(
                API_URL+'/join',
                {
                    email: email,
                    username: username,
                    password: password,
                    age: 13
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log('회원가입 성공:', response);
            navigate(`/login`);

        } catch (error) {
            console.error('회원가입 실패:', error);
        }
    };

    return (
        <div>
            <GlobalStyles />
            <S.Center>
                <S.Step>
                    <S.RoketImg src={Roket} style={{
                        transform: step === 1 ? "translateX(-48vh)"
                            : step === 2 ? "translateX(-8vh)" : "translateX(30vh)",
                    }} />
                    <>
                        <S.IconSvg src={Check} style={{ left: "-3%" }} />
                        <S.IconSvg src={Check} style={{ left: "45%" }} />
                        <S.IconSvg src={Check} style={{ left: "95%" }} />
                    </>
                </S.Step>
            </S.Center>
            <S.Title>반가워요,<br />저희와 함께 우주여행을 떠나 볼까요?</S.Title>
            <S.InputTable>
                <tbody>
                    <tr>
                        <S.Lname>아이디</S.Lname>
                        <td><S.Input
                            name="username"
                            placeholder="아이디를 입력해주세요"
                            value={inputs.username}
                            onChange={handleInputChange}
                        /></td>
                    </tr>
                    <tr>
                        <S.Lname>이메일</S.Lname>
                        <td><S.Input
                            name="email"
                            placeholder="이메일을 입력해주세요"
                            value={inputs.email}
                            onChange={handleInputChange}
                        /></td>
                    </tr>
                    <tr>
                        <S.Lname>비밀번호</S.Lname>
                        <td><S.Input
                            name="password"
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            value={inputs.password}
                            onChange={handleInputChange}
                        /></td>
                    </tr>
                    <tr>
                        <S.Lname>비밀번호 재입력</S.Lname>
                        <td><S.Input
                            name="confirmPassword"
                            type="password"
                            placeholder="비밀번호를 다시 입력해주세요"
                            value={inputs.confirmPassword}
                            onChange={handleInputChange}
                        /></td>
                    </tr>
                </tbody>
            </S.InputTable>
            <S.Center>
                <S.JoinBtn
                    onClick={() => Submit()}
                    disabled={!isFormValid} >
                    회원가입
                </S.JoinBtn>
            </S.Center>
        </div>
    );
}
