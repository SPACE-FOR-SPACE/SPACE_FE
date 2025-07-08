import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../../Loading/index.jsx';
import QuizBg from "../QuizBackground.jsx";
import Chat from '../../../Components/Chat.jsx'
import Background from './Background.jsx';
import config from '../../../config.js';

export default function Plant() {
    const { id } = useParams();
    const [text, setText] = useState([]);
    const [map, setMap] = useState([]);
    const [loading, setLoading] = useState(true);
    const [object, setObject] = useState({});
    const [dir, setDir] = useState("");

    useEffect(() => {
        setObject({
            0: "/map/player.svg",
            3: "/map/wall.svg",
            1000: "/map/potion.svg",
            1001: "/map/tree_wall.svg",
            1002: "/map/herb.svg",
            1003: "/map/mushroom1.svg",
            1004: "/map/mushroom2.svg",
            1005: "/map/flower.svg",
            1006: "/map/snake.svg",
            1007: "/map/tree.svg",
            1008: "/map/egg.svg",
            1009: "/map/incubator.svg",
            2001: "/map/thorn.svg",
        });
    }, []);

    useEffect(() => {
        setLoading(true);
        const QuizData = async () => {
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
                // const response3 = await axios.get(`${config.api}/chapters/1`, {
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     withCredentials: true,
                // });
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
                setLoading(false);
                setDir(response1.data.characterDirection);
            } catch (error) {
                console.error(error);
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
                    <Chat key={id} Obj={'none'} size={45} left={0} bottom={-2} anime={false} id={id} text={text} map={map} object={object} title={1} dir={dir}/>
                </>
            )}
        </>
    );
}
