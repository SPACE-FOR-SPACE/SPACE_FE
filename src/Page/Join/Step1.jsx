import * as S from './style';
import { useState } from 'react';

export default function Step1({ setStep, step }) {
    const [checked, setChecked] = useState({ terms: false, privacy: false });

    const handleCheckbox = (e) => {
        setChecked({ ...checked, [e.target.name]: e.target.checked });
    }

    const NextStep = () => {
        if (checked.terms && checked.privacy) {
            setStep(step + 1);
        } else {
            alert("모든 약관에 동의해야 다음 단계로 넘어갈 수 있습니다.");
        }
    }

    return (
        <>
            <S.Title2>저희와 함께 우주여행을 떠나 볼까요?</S.Title2>
            <S.ConsentBox></S.ConsentBox>
            <S.CheckBox>
                <input type="checkbox" name="terms" checked={checked.terms} onChange={handleCheckbox} />
                <span>(필수) 이용약관에 동의합니다</span>
            </S.CheckBox>
            <S.ConsentBox></S.ConsentBox>
            <S.CheckBox>
                <input type="checkbox" name="privacy" checked={checked.privacy} onChange={handleCheckbox} />
                <span>(필수) 개인정보 수집 약관에 동의합니다</span>
            </S.CheckBox>
            <S.Center>
                <S.JoinBtn onClick={() => NextStep()}>
                    시작하기
                </S.JoinBtn>
            </S.Center>
        </>
    )
}