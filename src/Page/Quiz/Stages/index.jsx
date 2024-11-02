import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../../BasicBg';
import list1 from '../../../assets/etc/stage/list1.svg';
import list2 from '../../../assets/etc/stage/list2.svg';
import back from '../../../assets/etc/stage/button.svg';

export default function Stages() {
  const totalStages = 10;

  return (
    <StagesContainer>
      <GlobalStyles />
      <BackButton>
        <img src={back} alt="back" />
      </BackButton>
      {[...Array(totalStages)].map((_, index) => (
        <StageButton key={index}>
          <Light />
          <img
            src={list1}
            alt={`Stage ${index + 1}`}
          />
          <span>{index + 1}</span>
        </StageButton>
      ))}
    </StagesContainer>
  );
};

const StagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5vh;
  padding: 8vh;
`;

const StageButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  width: 30vh;
  height: 30vh;
  top: 10vh;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 30vh;
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
    font-size: 10vh;
    z-index: 3;
  }
`;

const Light = styled.div`
  position: absolute;
  top: 0vh;
  left: 0vh;
  width: 30vh;
  height: 30vh;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
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
    width: 8vh;
    height: 8vh;
    top: 5vh;
    left: 5vh;

    img {
        position: absolute;
        width: 5vh;
        height: auto;
        top: 0vh;
        left: 0vh;
        width: 8vh;
        height: auto;
        -webkit-user-drag: none;
        -moz-user-drag: none;
        -ms-user-drag: none;
        user-select: none;
    }
`;
