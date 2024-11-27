import styled from "styled-components";

export default function Profile({ img, name, role }) {
    return (
        <Container>
            <Img src={img} />
            <Name>{name}</Name>
            <Role>{role}</Role>
        </Container>
    )
}

const Container = styled.div`
    margin: 5vh;
    width: 15vh;
`

const Img = styled.img`
    width: 15vh;
    height:15vh;
    border: none;
    border-radius: 50%;
    background-color: #D9D9D9;
    object-fit: cover;
    display: block;
`;

const Name = styled.div`
    margin-top: 1vh;
    font-size: 3vh;
    font-weight: 600;
    color: white;
    text-align: center;
`

const Role = styled.div`
    margin-top: 1vh;
    font-size: 3vh;
    color: white;
    text-align: center;
`