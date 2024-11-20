import Roket from "../../assets/etc/Roket.svg";
import Check from "../../assets/etc/Check.svg";
import img from '../../assets/etc/BackBtn.svg';
import * as S from './style';
import GlobalStyles from '../BasicBg.jsx';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";
import config from "../../config.js";

export default function Join() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errorMessages, setErrorMessages] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const stepProps = {
        step,
        setStep,
        inputs,
        setInputs,
        errorMessages,
        setErrorMessages
    };


    const Submit = async () => {
        const { username, email, password } = inputs;

        try {
            await axios.post(
                `${config.api}/join`,
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
            navigate(`/join`);
        }
    };

    return (
        <div>
            <GlobalStyles />
            <S.Btn onClick={() => navigate('/')}>
                <img src={img} />
            </S.Btn>
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
                {
                    step === 1 ?
                        <Step1 setStep={setStep} step={step} /> : step === 2 ?
                            <Step2 {...stepProps} /> :
                            <Step3 Submit={Submit} />
                }

            </S.Center>
        </div>
    );
} 