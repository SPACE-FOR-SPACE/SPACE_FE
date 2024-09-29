import GlobalStyles from "./GlobalStyle";
import * as S from './style'
import naver from "../../assets/etc/Login/naver.svg";
import google from "../../assets/etc/Login/google.svg";
import kakao from "../../assets/etc/Login/kakao.svg";

export default function Login() {
    return (
        <>
            <GlobalStyles />
            <S.Title>환영해요!</S.Title>
            <S.InputTable>
                <tbody>
                    <tr>
                        <S.Lname>아이디</S.Lname>
                        <td><S.Input placeholder="아이디를 입력해주세요" /></td>
                    </tr>
                    <tr>
                        <S.Lname>비밀번호</S.Lname>
                        <td><S.Input type="password" placeholder="비밀번호를 입력해주세요" /></td>
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
                <S.LoginBtn onClick={() => test()}>로그인</S.LoginBtn>
                <S.JoinContainer>
                    <S.SText>아직 회원이 아니세요? </S.SText>
                    <S.Join>회원가입</S.Join>
                </S.JoinContainer>
            </S.Center>

        </>
    )
}