import { useParams } from 'react-router-dom';

import Chat from '../../../Components/Chat.jsx'
import Cloud from './Cloud.jsx'
import QuizBg from "../QuizBackground.jsx";

export default function Volcano() {
    const { id } = useParams();
    const map = [
        [3, 3, 3, 3, 3, 3, 3],
        [3, 0, 2, 2, 3, 3, 3],
        [3, 3, 2, 2, 3, 3, 3],
        [3, 3, 2, 2, 3, 3, 3],
        [3, 3, 2, 2, 2, 2, 3],
        [3, 3, 2, 2, 2, 1000, 3],
        [3, 3, 3, 3, 3, 3, 3],
    ];
    const text = [
        {
            User: false,
            Text: "별에 착륙 무사히 착륙했어요! 마을로 이동해볼까요?",
            Type: "B"
        },
        {
            User: false,
            Text: "용암을 피하여 마을로 이동하기",
            Type: "C"
        },
        {
            User: false,
            Text: "마을에서 주민들에게 이동하기",
            Type: "C"
        },
        {
            User: false,
            Text: "주민들에게 말을 걸기",
            Type: "C"
        },
    ];
    return (
        <>
            <QuizBg $bg={"volcano"}/>
            <Cloud />
            <Chat Obj={'volcano'} size={120} left={-12} bottom={-5} anime={true} id={id} text={text} map={map}/>
        </>
    )
}