import styled from 'styled-components'

import Plant from '../../../assets/Planet/plant_planet.svg'

export default function PlantStage() {
    return (
        <Container>
            <Planet src={Plant} alt="Planet" />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #030C30;
`

const Planet = styled.img`
    width: 100%;
    height: 100%;
`
