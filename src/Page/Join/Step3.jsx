import { useState } from 'react';
import styled from 'styled-components';
import * as S from './style';

export default function Step3({ Submit }) {
    const [age, setAge] = useState(1);

    function Send() {
        if (age != null && age > 0) {
            Submit();
        } else {
            alert("나이를 정상적으로 입력해주세요");
        }
    }

    return (
        <>
            <S.Title3>만나서 반가워요!</S.Title3>

            <S.Title2>나이를 입력하세요</S.Title2>
            <S.Center>
                <div>
                    <AgeInput
                        name="age"
                        type="number"
                        value={age}
                        placeholder="나이를 입력해주세요"
                        onChange={(e) => {
                            setAge(e.target.value);
                        }}
                    />
                </div>
                <S.JoinBtn onClick={Send}>
                    회원가입
                </S.JoinBtn>
            </S.Center>
        </>

    );
}

const AgeInput = styled.input`
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    font-weight: 600;
    color: white;
    box-shadow: none;
    outline: none;
    border: none;
    background-color: transparent;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 80px;
    border: 3px solid #9D9DAE;
    border-radius: 15px;
`