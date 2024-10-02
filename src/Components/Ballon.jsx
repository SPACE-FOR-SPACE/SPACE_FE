import styled from "styled-components";

export default function Ballon({ User, Text, Num }) {
    const direction = User === true ? "left" : "right";
    const bgColor = User === true ? "#FFE5A2" : "#BBF8FF";

    return (
        <Container $flex={direction}>
            <Box $bg={bgColor}>
                <TextBox>{Text}</TextBox>
                <Triangle $bg={bgColor} $dir={direction}/>
            </Box>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: ${({ $flex }) => $flex === "left" ? "flex-end" : "flex-start"};
    margin-bottom: 3vh;
`;

const Box = styled.div`
    position: relative;
    width: auto;
    max-width: 60vh;
    min-height: 5vh;
    background-color: ${({ $bg }) => $bg};
    border-radius: 2vh;
    margin-left: 6vh;
    margin-right: 6vh;
    font-size: 2vh;
    text-align: left;
`;

const Triangle = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border-top: 1.5vh solid transparent;
    border-bottom: 1.5vh solid transparent;
    ${({ $bg, $dir }) => $dir === "left" ? `border-left: 5vh solid ${$bg}` : `border-right: 5vh solid ${$bg}`};
    bottom: 0.5vh;
    ${({ $dir }) => $dir === "left" ? "right: -3vh;" : "left: -3vh;"}
`;

const TextBox = styled.div`
    color: black;
    font-weight: bold;
    padding: 2vh;
`;
