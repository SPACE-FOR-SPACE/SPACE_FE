import styled from "styled-components";

export default function CheckList({ Text, check }) {
    return (
        <Container>
            <Box>
                <CheckMark>{check === 1 ? "✔" : null}</CheckMark>
                <TextBox>{Text}</TextBox>
            </Box>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 3vh;
`;

const Box = styled.div`
    position: relative;
    width: 40vh;
    min-height: 5vh;
    background-color: #EAFBFF;
    border-radius: 1vh;
    margin-left: 6vh;
    margin-right: 6vh;
    font-size: 2vh;
    text-align: left;
    display: flex;
    align-items: center;
`;

const CheckMark = styled.div`
    width: 4vh;
    height: 4vh;
    aspect-ratio: 1 / 1; 
    background-color: #D9D9D9;
    border-radius: 1vh;
    margin: 1.5vh;
    margin-right: 0.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5vh;
    color: #30d208;
`;

const TextBox = styled.div`
    color: black;
    font-weight: bold;
    padding: 2vh;
`;
