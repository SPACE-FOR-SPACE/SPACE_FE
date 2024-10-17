import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../../Loading/index.jsx';
import QuizBg from "../QuizBackground.jsx";
import Chat from '../../../Components/Chat.jsx'
import Background from './Background.jsx';

const API_URL = "https://port-0-space-server-m1oxeihpad978327.sel4.cloudtype.app";

export default function Plant() {
    const { id } = useParams();
    const [text, setText] = useState([]);
    const [map, setMap] = useState([]);
    // const [step, ]
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const QuizData = async () => {
            try {
                const response1 = await axios.get(`${API_URL}/chapters/1/steps/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning': 'true',
                    },
                    withCredentials: true,
                });

                const response2 = await axios.get(`${API_URL}/checklists/quiz/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning': 'true',
                    },
                    withCredentials: true,
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
                setMap(response1.data.map);
                console.log("성공");
                setLoading(false);
            } catch (error) {
                console.error('실패:', error);
                setLoading(false);
            }
        };

        QuizData();
    }, [id]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <QuizBg $bg={"plant"} />
                    <Background />
                    <Chat key={id} Obj={'none'} size={45} left={0} bottom={-2} anime={false} id={id} text={text} map={map} />
                </>
            )}
        </>
    );
}
