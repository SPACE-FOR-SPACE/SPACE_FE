import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../../BasicBg';
import list1 from '../../../assets/etc/stage/list1.svg';
import list2 from '../../../assets/etc/stage/list2.svg';
import back from '../../../assets/etc/stage/button.svg';
import { useNavigate, useParams } from 'react-router-dom';
import BackBtn from '../../../Components/BackBtn';

export default function Stages() {
  const { id } = useParams();
  const navigate = useNavigate();
  const totalStages = 10;
  const planets = {
    1: "plant",
    2: "sea",
    3: "volcano",
    4: "electricity",
    5: "poison",
  }

  return (
    <StagesWrapper>
      <StagesContainer>
        <GlobalStyles />
        <BackBtn title={"main"}/>
        {[...Array(totalStages)].map((_, index) => (
          <StageButton key={index} onClick={() => {console.log(`/${planets[id]}/${index+1}`); navigate(`/${planets[id]}/${index+1}`) }}>
            <Light />
            <img
              src={list1}
              alt={`Stage ${index + 1}`}
            />
            <span>{index + 1}</span>
          </StageButton>
        ))}
      </StagesContainer>
    </StagesWrapper>
  );
};

const StagesWrapper = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 100vh;
`;

const StagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  gap: 2vh 3vh; 
  padding: 4vh;
  justify-items: center;
  align-items: center;
  width: 70vw;
  height: 70vh;
`;

const StageButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  width: 20vh; 
  height: 20vh; 

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 20vh;
    height: auto;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-select: none;
    z-index: 2;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    font-size: 7vh;
    z-index: 3;
  }
`;

const Light = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 20vh;
  height: 20vh;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  filter: blur(5vh);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;

  ${StageButton}:hover & {
    opacity: 1;
  }
`;

const BackButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  width: 7vh;
  height: 7vh;
  top: 5vh;
  left: 5vh;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 5vh;
    height: auto;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-select: none;
  }
`;
