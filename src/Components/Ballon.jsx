import styled from "styled-components"

export default function Ballon({Text}) {
    return (
        <Box>
            {Text}
            <Triangle />
        </Box>
    );
}

const Box = styled.div`
    position: relative;
    width: 50vh;
    height: 10vh;
    background-color: #FFE5A2;
    border-radius: 2vh;
    margin-bottom: 3vh;
    margin-right: 6vh;
    margin-left: 6vh;
    font-size: 5vh;
    float: right;
`

const Triangle = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border-top: 1.5vh solid transparent;
    border-bottom: 1.5vh solid transparent;
    border-left: 5vh solid #FFE5A2;
    top: 6vh;
    right: -3vh;
`
