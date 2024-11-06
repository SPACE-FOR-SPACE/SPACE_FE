import { useNavigate } from 'react-router-dom'
import * as S from './style'
import GlobalStyles from './Background.jsx'

import Planet from '../../Components/Planet.jsx'
import sun from '../../assets/Object/etc/sun.svg'
import Btn from '../../assets/etc/BackBtn.svg'

import plantPlanet from '../../assets/Planet/plant_planet.svg'
import seaPlanet from '../../assets/Planet/sea_planet.svg'
import redPlanet from '../../assets/Planet/red_planet.svg'
import electricityPlanet from '../../assets/Planet/electricity_planet.svg'
import poisonPlanet from '../../assets/Planet/poison_planet.svg'

const planets = [
  { src: plantPlanet, size: 30, x1: 125, y1: 15, panime: 1, color: "#0AFF07", x2: 1, y2: -1, size2: 30, title: 3, lock: false },
  { src: seaPlanet, size: 30, x1: 145, y1: 50, panime: 2, color: "#00D2FF", x2: -4, y2: -2, size2: 35, title: 1, lock: true },
  { src: redPlanet, size: 30, x1: 100, y1: 50, panime: 1, color: "#A20114", x2: -4, y2: 1, size2: 30, title: 2, lock: true },
  { src: electricityPlanet, size: 35, x1: 55, y1: 41, panime: 2, color: "#FFC634", x2: 5, y2: 4, size2: 25, title: 4, lock: true },
  { src: poisonPlanet, size: 30, x1: 40, y1: 71, panime: 1, color: "#872CBF", x2: 1, y2: -1, size2: 30, title: 5, lock: true },
]

const Ring = ({ x, y, top, right, style }) => (
  <S.Ring x={x} y={y} top={top} right={right} style={style} />
)

export default function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <GlobalStyles />
      <S.BackBtn onClick={() => navigate('/')}>
        <img src={Btn} />
      </S.BackBtn>
      {planets.map((planet, index) => (
        <Planet key={index} {...planet} />
      ))}
      <Ring x={200} y={80} top={-40} right={-100} />
      <Ring x={200} y={80} top={-40} right={-100} style={{ zIndex: 3 }} />
      <Ring x={400} y={120} top={-80} right={-275} />
      <Ring x={550} y={150} top={-105} right={-400} />
      <Ring x={780} y={180} top={-140} right={-600} />
      <S.Sun src={sun} />
    </div>
  );
}
