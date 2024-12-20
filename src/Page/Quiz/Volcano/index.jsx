import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createGlobalStyle } from "styled-components";

import Chat from '../../../Components/Chat.jsx'
import Cloud from './Cloud.jsx'
import Loading from '../../Loading/index.jsx';
import axios from 'axios';
import config from '../../../config.js';

export default function Volcano() {
    const { id } = useParams();
    const [text, setText] = useState([]);
    const [map, setMap] = useState([]);
    const [loading, setLoading] = useState(true);
    const [object, setObject] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response1 = await axios.get(`${config.api}/quizzes/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                });

                const response2 = await axios.get(`${config.api}/checklists/quiz/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                });

                const response3 = await axios.get(`${config.api}/chapters/2`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                });

                setMap(response1.data.map);
                setObject({
                    ...response1.data.mapObjectImage,
                    ...response3.data.mapObjectImage
                });
                setText([
                    {
                        User: false,
                        Text: response1.data.content,
                        Type: 'B'
                    },
                    ...response2.data.map(item => ({
                        User: false,
                        Text: item.content,
                        Type: 'C'
                    }))
                ]);
                setLoading(false);
            } catch (error) {
                console.error('실패:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);


    if (loading) return <Loading />;

    return (
        <>
            <GlobalStyles />
            <Cloud />
            <Chat Obj={'volcano'} size={120} left={-12} bottom={-5} anime={true} id={id} text={text} map={map} object={object} title={3}/>
        </>
    )
}

const GlobalStyles = createGlobalStyle`
    body {
        width: 100vw;
        height: 100vh; 
        margin: 0;
        background-image: linear-gradient(#1E0233 20%, #8C0017 100%);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        overflow: hidden;
        -webkit-user-drag: none;
        -moz-user-drag: none;
        -ms-user-drag: none;
        user-select: none;
    }
`;