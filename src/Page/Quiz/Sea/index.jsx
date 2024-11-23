import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import QuizBg from "../QuizBackground.jsx";
import Chat from '../../../Components/Chat.jsx';
import Loading from '../../Loading/index.jsx';
import axios from 'axios';
import config from '../../../config.js';

export default function Sea() {
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
                        'ngrok-skip-browser-warning': 'true',
                    },
                    withCredentials: true,
                });

                const response2 = await axios.get(`${config.api}/checklists/quiz/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning': 'true',
                    },
                    withCredentials: true,
                });

                const response3 = await axios.get(`${config.api}/chapters/2`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning': 'true',
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

    if (loading) return <Loading />

    return (
        <>
            <QuizBg $bg={"sea"} />
            <Chat key={id} Obj={'reef'} size={45} left={-2} bottom={-5} anime={false} id={id} text={text} map={map} object={object} title={2}/>
        </>
    );
}
