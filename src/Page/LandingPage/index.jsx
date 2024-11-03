import { useState, useEffect } from 'react';
import * as S from './style.js';
import Plant1 from '../../assets/Landing/Plant1.svg';
import Star from '../../assets/Landing/Star.svg';
import light from '../../assets/Landing/element/light.svg';
import dark from '../../assets/Landing/element/dark.svg';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const [pos, setPos] = useState(1);
  const navigate = useNavigate();

  const scrollToSection = (index) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <S.Body />
      <S.Ring top={230} left={-600} />
      <S.Ring top={240} left={-580} />
      <S.Header>
        <S.Left>
          <S.Title>SPACE</S.Title>
          <S.Menu active={String(pos === 1)} onClick={() => { setPos(1); scrollToSection(1); }}>메인</S.Menu>
          {/* <S.Menu active={pos === 2} onClick={() => { setPos(2); scrollToSection(2); }}>프로젝트 소개</S.Menu>
          <S.Menu active={pos === 3} onClick={() => { setPos(3); scrollToSection(3); }}>팀 소개</S.Menu>
          <S.Menu active={pos === 4} onClick={() => { setPos(4); scrollToSection(4); }}>커뮤니티</S.Menu> */}
        </S.Left>
        <S.Right>
          <S.Sign color={"#F9A723"} onClick={() => navigate(`/join`)}>회원가입</S.Sign>
          <S.Sign color={"#ffffff"} onClick={() => navigate(`/login`)}>로그인</S.Sign>
        </S.Right>
      </S.Header>
      <S.Section id="section-1">
        <S.Light size={80} color={"#F99A00"} x={-15} y={15} />
        <img src={Plant1} />
        <S.MainTitle>시작해볼까요?</S.MainTitle>
        <S.Btn>
          <S.StartBtn onClick={() => navigate(`/main`)}>시작 <S.MarqueeStyle>➜</S.MarqueeStyle></S.StartBtn>
        </S.Btn>
      </S.Section>
      <S.Star src={Star} x={-1} y={5} />
      <S.Star src={Star} x={35} y={4} />
      <S.Star src={Star} x={80} y={20} />
      <S.Star src={Star} x={52} y={60} />
      <S.Element src={light} size={10} x={40} y={20} />
      <S.Element src={dark} size={20} x={85} y={60} />
    </div>
  );
}