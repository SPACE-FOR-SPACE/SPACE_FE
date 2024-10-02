import { useState } from "react";
import styled from "styled-components";

export default function CheckList({ Text }) {
    const [checked, setChecked] = useState(false);

    const toggleCheck = () => {
        setChecked(!checked);
    };

    return (
        <Container>
            <Box>
                <Check onClick={toggleCheck} checked={checked} />
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

const Check = styled.div`
    width: 4vh;
    height: 4vh;
    aspect-ratio: 1 / 1; 
    background-color: ${({ checked }) => (checked ? "#30D208" : "#D9D9D9")};
    border-radius: 1vh;
    margin: 1.5vh;
    margin-right: 0.5vh;
    cursor: pointer;
`;

const TextBox = styled.div`
    color: black;
    font-weight: bold;
    padding: 2vh;
`;
