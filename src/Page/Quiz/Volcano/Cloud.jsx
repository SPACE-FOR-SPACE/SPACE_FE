import cloud from '../../../assets/Object/Volcano/cloud.svg'
import styled from 'styled-components'

export default function Cloud() {
    return (
        <Img src={cloud} />
    );
}

const Img = styled.img `
    top:-6vh;
    width: 100%;
    position: absolute;
`