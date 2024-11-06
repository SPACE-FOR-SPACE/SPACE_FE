import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Stage() {
    const location = useLocation();
    const navigate = useNavigate();
    const currentId = parseInt(location.pathname.split('/').pop(), 10);

    const changeId = (newId) => {
        const newPath = location.pathname.replace(currentId, newId);
        navigate(newPath);
    };

    const pointIds = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <Box>
            {pointIds.map((id) => (
                <Point key={id} $bg={currentId === id} onClick={() => changeId(id)} />
            ))}
        </Box>
    );
}

const Box = styled.div `
    position: relative;
    margin-bottom: -80vh;
    width: 60vh;
    height: 5vh;
`

const Point = styled.button `
    width: 4vh;
    aspect-ratio: 1 / 1; 
    background-color: ${({$bg}) => $bg ? "#30D208" : "white"};
    border: 0.5vh solid ${({$bg}) => $bg ? "#30D208" : "white"};
    border-radius: 100vh;
    cursor: pointer;
    margin: 1vh;
`