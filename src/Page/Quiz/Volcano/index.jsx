import { useParams } from 'react-router-dom';

import Chat from '../../../Components/Chat.jsx'
import Cloud from './Cloud.jsx'
import QuizBg from "../QuizBackground.jsx";

export default function Volcano() {
    const { id } = useParams();
    const text = [[
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
    ],
    [
        {
            User: false,
            Text: "아직 생존자가 남아있다고해요! 어서 생존들을 구출해줍시다",
            Type: "B"
        },
        {
            User: false,
            Text: "생존자가 있는곳으로 이동하기",
            Type: "C"
        },
        {
            User: false,
            Text: "우주선에 생존자들을 태우기",
            Type: "C"
        },
        {
            User: false,
            Text: "다시 마을로 이동하기",
            Type: "C"
        },
    ],
    [
        {
            User: false,
            Text: "마을 주민들이 화산재로 인해 많이 힘들어하고 있어요 치워서 도와주도록 합시다.",
            Type: "B"
        },
        {
            User: false,
            Text: "화산재가 있는  곳으로 이동하기",
            Type: "C"
        },
        {
            User: false,
            Text: "화산재를 담기",
            Type: "C"
        },
        {
            User: false,
            Text: "모은 화산재를 다른 곳에 버리기",
            Type: "C"
        },
        {
            User: false,
            Text: "목적지로 이동하기",
            Type: "C"
        },
    ],
    ];
    return (
        <>
            <QuizBg $bg={"volcano"}/>
            <Cloud />
            <Chat Obj={'volcano'} size={120} left={-12} bottom={-5} anime={true} id={id} text={text}/>
        </>
    )
}