import { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './style.js';
import Plant1 from '../../assets/Landing/Plant1.svg';
import Plant2 from '../../assets/Landing/Plant2.svg';
import Star from '../../assets/Landing/Star.svg';
import light from '../../assets/Landing/element/light.svg';
import dark from '../../assets/Landing/element/dark.svg';
import water from '../../assets/Landing/element/water.svg';
import roket from '../../assets/Landing/Roket.svg';
import sun from '../../assets/Landing/Sun.svg';
import logo from '../../assets/Landing/Logo.svg';
import { useNavigate } from 'react-router-dom';
import config from '../../config.js';
import Profile from '../../Components/Profile.jsx';
import Profile1 from '../../assets/Landing/Profile/p1.jpg';
import Profile2 from '../../assets/Landing/Profile/p2.png';
import Profile3 from '../../assets/Landing/Profile/p3.png';
import Profile4 from '../../assets/Landing/Profile/p4.png';
import Profile5 from '../../assets/Landing/Profile/p5.png';
import Profile6 from '../../assets/Landing/Profile/p6.png';

export default function LandingPage({ setMainLogin }) {
  const [pos, setPos] = useState(1);
  const [login, setLogin] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.api}/check`, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        });
        if (response.status === 200) {
          setLogin(true)
        }
      } catch (e) {
        setLogin(false);
      }
    };

    fetchData();
  }, []);

  const handleScroll = () => {
    if (isScrolling) return;

    const sections = document.querySelectorAll('section[id^="section-"]');

    let foundSection = false;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight) {
        if (!isScrolling) {
          setPos(index + 1);
        }
        foundSection = true;
      }
    });
  };

  const handleMenuClick = (index) => {
    setIsScrolling(true);
    setPos(index);
    scrollToSection(index);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      setIsScrolling(false);
      document.body.style.overflow = '';
    }, 800);
  };

  const scrollToSection = (index) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.innerHeight - section.offsetHeight) / 2;
      window.scrollTo({ top: sectionTop - offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolling]);

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

  return (
    <div>
      <S.Body />
      <S.RingBox>
        <S.Ring top={230} left={-600} />
        <S.Ring top={240} left={-580} />
      </S.RingBox>
      <S.Header>
        <S.Left>
          <S.Title>SPACE</S.Title>
          <S.Menu active={pos === 1} onClick={() => handleMenuClick(1)}>메인</S.Menu>
          <S.Menu active={pos === 2} onClick={() => handleMenuClick(2)}>프로젝트 소개</S.Menu>
          <S.Menu active={pos === 3} onClick={() => handleMenuClick(3)}>팀 소개</S.Menu>
          <S.Menu as="a" href="https://spacecommunity.vercel.app/" target="_blank" rel="noopener noreferrer">
            커뮤니티
          </S.Menu>
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
      <S.Snap>
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
          <S.Container>
            <S.Logo src={logo} />
            <S.MemberBox>
              <Profile img={Profile1} name={"김민주"} role={"디자인"} />
              <Profile img={Profile2} name={"김다온"} role={"프론트"} />
              <Profile img={Profile3} name={"오윤찬"} role={"백엔드"} />
              <Profile img={Profile4} name={"김승빈"} role={"백엔드"} />
              <Profile img={Profile5} name={"이재현"} role={"AI"} />
              <Profile img={Profile6} name={"강시우"} role={"AI"} />
            </S.MemberBox>
          </S.Container>
        </S.Section>
      </S.Snap>
      <S.Star src={Star} x={-1} y={5} />
      <S.Star src={Star} x={35} y={4} />
      <S.Star src={Star} x={80} y={20} />
      <S.Star src={Star} x={52} y={60} />
      <S.Star src={Star} x={5} y={145} />
      <S.Star src={Star} x={90} y={140} />
      <S.Star src={Star} x={2} y={220} />
      <S.Star src={Star} x={80} y={280} />
      <S.Star src={Star} x={20} y={285} />
      <S.Star src={Star} x={75} y={305} />
      <S.Star src={Star} x={20} y={355} />
      <S.Element src={light} size={10} x={40} y={20} />
      <S.Element src={dark} size={20} x={85} y={60} />
      <S.Element src={water} size={10} x={30} y={150} />
      <S.Element src={water} size={10} x={80} y={250} />
      <S.Element src={light} size={10} x={8} y={290} />
      <S.Roket src={roket} size={20} x={80} y={295} />
      <S.Sun src={sun} />
    </div>
  );
}