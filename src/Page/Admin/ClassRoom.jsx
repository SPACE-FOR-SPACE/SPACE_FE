import { useEffect, useState } from "react";
import * as S from './style';
import Header from "./Header";
import Side from "./Side";
import Class from "../../Components/Class";
import { FiPlus } from "react-icons/fi";
import styled from "styled-components";
import config from "../../config";
import axios from "axios";

export default function ClassRoom() {
    const [user, setUser] = useState('');
    const [ClassList, setClassList] = useState([]);

    useEffect(() => {
        const User = async () => {
            try {
                const username = localStorage.getItem('username');
                setUser(username);
            } catch (error) {
                console.error('실패:', error);
            }
        };

        User();

        const ClassList = async () => {
            try {
                const response = await axios.get(`${config.api}/trainings`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                });
                setClassList(response.data);

            } catch (error) {
                console.error('실패:', error);
            }
        };

        ClassList();
    }, []);
    return (
        <div>
            <S.Body />
            <Header user={user} />
            <S.Container>
                <Side title={3} />
                <AddClass><FiPlus /></AddClass>
                <S.Section>
                    <S.Title><span>{user}</span>님의 클래스룸</S.Title>
                    <Scroll>
                        <ClassContainer>
                            {
                                ClassList.map((item, index) => (
                                    <Class key={index} title={item.title} members={16} index={item.id}/>
                                ))
                            }

                        </ClassContainer>
                    </Scroll>
                </S.Section>
            </S.Container>
        </div>
    );
}


export const ClassContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 20px;
    gap: 40px;
    width: auto;
    margin: 0 auto;
`;

export const Scroll = styled.div`
    width: 95%;
    height: 70vh;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
`

export const AddClass = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #D9D9D9;
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
`;