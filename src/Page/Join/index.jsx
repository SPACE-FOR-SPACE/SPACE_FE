import Roket from "../../assets/etc/Roket.svg";
import Check from "../../assets/etc/Check.svg";
import * as S from './style'
import GlobalStyles from './GlobalStyle.jsx'
import { useState } from "react";

export default function Join() {
    const [step, setStep] = useState(1);

    function test() {
        setStep((step % 3) + 1);
    }

    return (
        <div>
            <GlobalStyles />
            <S.Center>
                <S.Step>
                    <S.RoketImg src={Roket} style={{
                        transform: step == 1 ? "translateX(-48vh)"
                            : step == 2 ? "translateX(-8vh)" : "translateX(30vh)",
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
                <tr>
                    <S.Lname>아이디</S.Lname>
                    <td><S.Input placeholder="아이디를 입력해주세요" /></td>
                </tr>
                <tr>
                    <S.Lname>이메일</S.Lname>
                    <td><S.Input placeholder="이메일을 입력해주세요" /></td>
                </tr>
                <tr>
                    <S.Lname>비밀번호</S.Lname>
                    <td><S.Input type="password" placeholder="비밀번호를 입력해주세요" /></td>
                </tr>
                <tr>
                    <S.Lname>비밀번호 재입력</S.Lname>
                    <td><S.Input type="password" placeholder="비밀번호를 다시 입력해주세요" /></td>
                </tr>
            </S.InputTable>
            <S.Center>
                <S.JoinBtn onClick={() => test()}>회원가입</S.JoinBtn>
            </S.Center>

        </div>
    );
}

