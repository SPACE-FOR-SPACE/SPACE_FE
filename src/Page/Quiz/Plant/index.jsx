import { useParams } from 'react-router-dom';

import QuizBg from "../QuizBackground.jsx";
import Chat from '../../../Components/Chat.jsx'
import Background from './Background.jsx';

export default function Plant() {
    const { id } = useParams();
    const text = [[
        {
            User: false,
            Text: "드래곤이 마을을 할퀴고 갔습니다. 이에 따라 다친 사람이 늘어났습니다. 이들을 치료하기 위해 스캔 장비를 사용하여 허브인지 판단하고, 포션을 제조합시다.",
            Type: "B"
        },
        {
            User: false,
            Text: "스캔 장비로 허브 파악하기",
            Type: "C"
        },
        {
            User: false,
            Text: "채집하고 저장하기",
            Type: "C"
        },
        {
            User: false,
            Text: "포션 제조하기",
            Type: "C"
        },
    ],
    [
        {
            User: false,
            Text: "나무를 올라타서 드래곤의 위치를 파악해야합니다. 반복적으로 올라갈 수 있습니다.",
            Type: "B"
        },
        {
            User: false,
            Text: "나무의 높이 확인하기",
            Type: "C"
        },
        {
            User: false,
            Text: "나무를 1m씩 올라가기",
            Type: "C"
        },
        {
            User: false,
            Text: "위의 과정을 유저의 높이가 나무의 높이보다 작을때 까지 반복하기",
            Type: "C"
        },
    ],
    [
        {
            User: false,
            Text: "드래곤 소굴로 향하는 길이 가시로 둘러쌓여 있습니다. 가시를 피해 드래곤 소굴에 도착하세요.",
            Type: "B"
        },
        {
            User: false,
            Text: "앞의 길에 가시가 있는지 파악하기",
            Type: "C"
        },
        {
            User: false,
            Text: "만약 : 가시가 있다면, 위와 아래쪽에 가시가 있는지 파악하기",
            Type: "C"
        },
        {
            User: false,
            Text: "만약 : 가시가 없다면, 전진하기",
            Type: "C"
        },
        {
            User: false,
            Text: "위의 과정을 반복하기",
            Type: "C"
        },
    ],
    ]
    return (
        <>
            <QuizBg $bg={"plant"}/>
            <Background />
            <Chat Obj={'none'} size={45} left={0} bottom={-2} anime={false} id={id} text={text}/>
        </>
    )
}
