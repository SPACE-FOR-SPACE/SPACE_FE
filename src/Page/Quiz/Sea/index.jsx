import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import QuizBg from "../QuizBackground.jsx";
import Chat from '../../../Components/Chat.jsx';
import Loading from '../../Loading/index.jsx';

export default function Sea() {
    const { id } = useParams();
    const [text, setText] = useState([]);
    const [map, setMap] = useState([]);
    const [loading, setLoading] = useState(true);
    const [object, setObject] = useState([]);

    useEffect(() => {
        setMap([
            [3, 3, 3, 3, 3, 3, 3],
            [3, 0, 2, 2, 3, 3, 3],
            [3, 3, 2, 2, 3, 3, 3],
            [3, 3, 2, 2, 3, 3, 3],
            [3, 3, 2, 2, 2, 2, 3],
            [3, 3, 2, 2, 2, 1000, 3],
            [3, 3, 3, 3, 3, 3, 3],
        ]);

        setObject({
            0:"https://space-static-images.s3.ap-northeast-2.amazonaws.com/Player_boy.svg",
            3:"https://space-static-images.s3.ap-northeast-2.amazonaws.com/wall.svg"
        })

        setText([
            {
                User: false,
                Text: "잠수함을 타고 바닷속 탐험을 시작해요.잠수함을 작동시킵시다.",
                Type: 'B'
            },
            {
                User: false,
                Text: "잠수함으로 이동하기",
                Type: 'C'
            },
            {
                User: false,
                Text: "잠수함 작동시키기",
                Type: 'C'
            },
            {
                User: false,
                Text: "탐험 시작하기",
                Type: 'C'
            }
        ]);

        setLoading(false);
    }, []);

    if (loading) return <Loading />

    return (
        <>
            <QuizBg $bg={"sea"} />
            <Chat key={id} Obj={'reef'} size={45} left={-2} bottom={-5} anime={false} id={id} text={text} map={map} object={object}/>
        </>
    );
}
