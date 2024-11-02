import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import QuizBg from "../QuizBackground.jsx";
import Chat from '../../../Components/Chat.jsx';

export default function Sea() {
    const { id } = useParams();
    const [text, setText] = useState([]);
    const [map, setMap] = useState([]);
    const [loading, setLoading] = useState(true);

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

        setLoading(false); // 로딩 완료 상태
    }, []); // 빈 배열을 넣어 최초 렌더링 시 한 번만 실행

    if (loading) return <div>Loading...</div>; // 로딩 중일 때 표시할 화면

    return (
        <>
            <QuizBg $bg={"sea"} />
            <Chat key={id} Obj={'reef'} size={45} left={-2} bottom={-5} anime={false} id={id} text={text} map={map} />
        </>
    );
}
