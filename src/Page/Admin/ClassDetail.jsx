import { useEffect, useState } from "react";
import * as S from './style';
import Header from "./Header";
import Side from "./Side";
import styled from "styled-components";
import Member from "../../Components/Member";
import { useParams } from "react-router-dom";
import axios from "axios";
import config from "../../config";

export default function ClassDetail() {
    const { id } = useParams();
    const [user, setUser] = useState('');
    const [memberlist, setMemberList] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const username = localStorage.getItem('username');
                setUser(username);
            } catch (error) {
                console.error('User fetch failed:', error);
            }
        };

        const fetchMemberList = async () => {
            try {
                const response = await axios.get(`${config.api}/memberships/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                });

                const memberData = await Promise.all(
                    response.data.map(async (item) => {
                        try {
                            const res = await axios.get(`${config.api}/users/${item.id}`, {
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                withCredentials: true,
                            });
                            return res.data.username;
                        } catch (error) {
                            console.error('Member fetch failed:', error);
                            return null;
                        }
                    })
                );

                setMemberList(memberData.filter(Boolean));
            } catch (error) {
                console.error('MemberList fetch failed:', error);
            }
        };

        fetchUser();
        fetchMemberList();
    }, []);

    console.log(memberlist)

    return (
        <div>
            <S.Body />
            <Header user={user} />
            <S.Container>
                <Side title={3} />
                <S.Section>
                    <ClassName>2-2 모임</ClassName>
                    <List>
                        <Text>참가자</Text>
                        <Box>
                            {memberlist.map((item, index) => (
                                <Member key={index} profile={""} name={item} />
                            ))}
                        </Box>
                    </List>
                </S.Section>
            </S.Container>
        </div>
    );
}

const ClassName = styled.div`
    padding: 25px;
    color: white;
    font-size: 40px;
    background-color: #d9821f;
    width: 90%;
    height: 130px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    border: none;
    border-radius: 25px;
    padding: 20px;
    padding-left: 40px;
    margin: 0 auto;
    margin-top: 50px;
`;

const List = styled.div`
    padding: 25px;
    color: white;
    font-size: 40px;
    background-color: white;
    width: 90%;
    height: 40%;
    border: 1px solid #979797;
    border-radius: 25px;
    padding: 20px;
    padding-left: 40px;
    margin: 0 auto;
    margin-top: 50px;
`;

const Text = styled.div`
    display: block;
    color: #898989;
    font-size: 20px;
    padding-top: 10px;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    height: 80%;
    overflow-y: auto;
    margin: 0 auto;
    margin-top: 25px;
`;
