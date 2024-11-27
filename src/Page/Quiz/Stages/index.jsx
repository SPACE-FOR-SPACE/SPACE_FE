import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from '../../BasicBg';
import list1 from '../../../assets/etc/stage/list1.svg';
import list2 from '../../../assets/etc/stage/list2.svg';
import { useNavigate, useParams } from 'react-router-dom';
import BackBtn from '../../../Components/BackBtn';
import axios from 'axios';
import config from '../../../config';

export default function Stages() {
  const [quizzes, setQuizzes] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ]);
  const { id } = useParams();
  const navigate = useNavigate();
  const planets = {
    1: "plant",
    2: "sea",
    3: "volcano",
    4: "electricity",
    5: "poison",
  }

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // useEffect(() => {
  //   const fetchQuizzes = async () => {
  //     try {
  //       const response = await axios.get(`${config.api}/chapters/${id}/quizzes`, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'ngrok-skip-browser-warning': 'true',
  //         },
  //         withCredentials: true,
  //       });
  //       setQuizzes(response.data);
  //     } catch (error) {
  //       console.error('퀴즈 목록을 불러오는 데 실패했습니다:', error);
  //     }
  //   };

  //   fetchQuizzes();
  // }, [id]);

  return (
    <StagesWrapper>
      <StagesContainer>
        <GlobalStyles />
        <BackBtn title={"main"} />
        {quizzes.map((quiz, index) => (
          <StageButton
            key={quiz.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
              console.log(`/${planets[id]}/${quiz.id + 10 * (id - 1)}`);
              navigate(`/${planets[id]}/${quiz.id + 10 * (id - 1)}`);
            }}
          >
            <Light />
            <img
              src={hoveredIndex === index ? list2 : list1}
              alt={`Stage ${quiz.id + 10 * (id - 1)}`}
            />
            <span>{index + 1}</span>
          </StageButton>
        ))}
      </StagesContainer>
    </StagesWrapper>
  );
}

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
    pointer-events: none;
  }
`;

const Light = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 20vh;
  height: 20vh;
  border-radius: 50%;
  background-color: rgba(255, 234, 0, 0.862);
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
