import { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './style.js';
import Plant1 from '../../assets/Landing/Plant1.svg';
import Plant2 from '../../assets/Landing/Plant2.svg';
import Star from '../../assets/Landing/Star.svg';
import light from '../../assets/Landing/element/light.svg';
import dark from '../../assets/Landing/element/dark.svg';
import water from '../../assets/Landing/element/water.svg';
import { useNavigate } from 'react-router-dom';
import config from '../../config.js';

export default function LandingPage({setMainLogin}) {
  const [pos, setPos] = useState(1);
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(import.meta.env);

        const response = await axios.get(`${config.api}/check`, {
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true',
          },
          withCredentials: true,
        });
        
        console.log(response);
        if (response.status === 200) {
          setLogin(true)
        }
      } catch (e) {
        setLogin(false);
      }
    };

    fetchData();
  }, []);

  async function Logout() {
    try {
      await axios.post(`${config.api}/logout`, {}, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      console.log('로그아웃');
      window.location.reload();
    } catch (error) {
      console.error('로그아웃 실패', error);
    }
  }

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
          <S.Menu active={pos === 1 ? true : false} onClick={() => { setPos(1); scrollToSection(1); }}>메인</S.Menu>
          <S.Menu active={pos === 2 ? true : false} onClick={() => { setPos(2); scrollToSection(2); }}>프로젝트 소개</S.Menu>
          {/* <S.Menu active={pos === 3} onClick={() => { setPos(3); scrollToSection(3); }}>팀 소개</S.Menu> */}
          {/* <S.Menu active={pos === 4} onClick={() => { setPos(4); scrollToSection(4); }}>커뮤니티</S.Menu> */}
        </S.Left>
        {
          login ?
            <S.Right>
              <S.Sign color={"#ffffff"} onClick={() => Logout()}>로그아웃</S.Sign>
            </S.Right> :
            <S.Right>
              <S.Sign color={"#F9A723"} onClick={() => navigate(`/join`)}>회원가입</S.Sign>
              <S.Sign color={"#ffffff"} onClick={() => navigate(`/login`)}>로그인</S.Sign>
            </S.Right>
        }
      </S.Header>
      <S.Section id="section-1">
        <S.Light size={80} color={"#F99A00"} x={-15} y={15} />
        <img className="Plant1" src={Plant1} />
        <S.MainTitle1>시작해볼까요?</S.MainTitle1>
        <S.Btn>
          <S.StartBtn onClick={() => navigate(`/main`)}>
            시작
            <S.MarqueeStyle>➜</S.MarqueeStyle>
          </S.StartBtn>
        </S.Btn>
      </S.Section>
      <S.Section id="section-2">
        <img className="Plant2" src={Plant2} />
        <S.TitleWithText>
          <S.MainTitle2>프로젝트소개</S.MainTitle2>
          <S.Text>
          SPACE는 미래 지향적인 디자인과 <br />
          혁신적인 기술을 결합한 디지털 플랫폼입니다.<br />
          사용자에게 무한한 창의성과 가능성을 제공하며,<br />
          일상을 새로운 차원으로 연결합니다.
          </S.Text>
        </S.TitleWithText>
      </S.Section>
      <S.Section id="section-3">
        
      </S.Section>
      <S.Star src={Star} x={-1} y={5} />
      <S.Star src={Star} x={35} y={4} />
      <S.Star src={Star} x={80} y={20} />
      <S.Star src={Star} x={52} y={60} />
      <S.Star src={Star} x={5} y={130} />
      <S.Star src={Star} x={90} y={125} />
      <S.Star src={Star} x={2} y={205} />
      <S.Element src={light} size={10} x={40} y={20} />
      <S.Element src={dark} size={20} x={85} y={60} />
      <S.Element src={water} size={10} x={30} y={135} />
    </div>
  );
}