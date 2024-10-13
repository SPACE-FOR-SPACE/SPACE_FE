import * as S from './style'
import GlobalStyles from './Background.jsx'

import Planet from '../../Components/Planet.jsx'
import green from '../../assets/Planet/green_planet.svg'
import sea from '../../assets/Planet/sea_planet.svg'
import red from '../../assets/Planet/red_planet.svg'
import electricity from '../../assets/Planet/electricity_planet.svg'
import poison_planet from '../../assets/Planet/poison_planet.svg'
import sun from '../../assets/Object/etc/sun.svg'

export default function Main() {

    return (
        <div>
            <GlobalStyles/> 
            <Planet src={green} size={30} x1={125} y1={15} panime={1} color={"#0AFF07"} x2={1} y2={-1} size2={30} title={3} lock={false}/>
            <Planet src={sea} size={30} x1={145} y1={50} panime={2} color={"#00D2FF"} x2={-4} y2={-2} size2={35} title={1} lock={false}/>
            <Planet src={red} size={30} x1={100} y1={50} panime={1} color={"#A20114"} x2={-4} y2={1} size2={30} title={2} lock={false}/>
            <Planet src={electricity} size={35} x1={55} y1={41} panime={2} color={"#FFC634"} x2={5} y2={4} size2={25} title={4} lock={true}/>
            <Planet src={poison_planet} size={30} x1={40} y1={71} panime={1} color={"#872CBF"} x2={1} y2={-1} size2={30} title={5} lock={true}/>
            <S.Ring x={200} y={80} top={-40} right={-100}/>
            <S.Ring x={200} y={80} top={-40} right={-100} style={{zIndex:3}}/>
            <S.Ring x={400} y={120} top={-80} right={-275}/>
            <S.Ring x={550} y={150} top={-105} right={-400}/>
            <S.Ring x={780} y={180} top={-140} right={-600}/>
            <S.Sun src={sun}/>
        </div>
    );
}

