import { useParams } from 'react-router-dom';

import GlobalStyles from './GlobalStyle.jsx'
import Chat from '../../../Components/Chat.jsx'

export default function Sea() {
    const { id } = useParams();
    const text = [[
        {
            User: false,
            Text: "잠수함을 타고 바닷속 탐험을 시작해요. 잠수함을 작동시킵시다.",
            Type: "B"
        },
        {
            User: false,
            Text: "잠수함으로 이동하기",
            Type: "C"
        },
        {
            User: false,
            Text: "잠수함 작동시키기",
            Type: "C"
        },
        {
            User: false,
            Text: "탐험 시작하기",
            Type: "C"
        },
    ],
    [
        {
            User: false,
            Text: "흰동가리를 만났어요! 흰동가리의 부탁인 '말미잘을 청소해주세요.'를 들어주세요",
            Type: "B"
        },
        {
            User: false,
            Text: "말미잘로 이동하기",
            Type: "C"
        },
        {
            User: false,
            Text: "오염된 말미잘 닦기",
            Type: "C"
        },
        {
            User: false,
            Text: "죽은 말미잘 없애기",
            Type: "C"
        },
    ],
    [
        {
            User: false,
            Text: "소라게를 만났어요! 소라게의 부탁인 '내 집인 껍데기가 부숴졌어. 새 집을 가져와줘.'를 들어주세요",
            Type: "B"
        },
        {
            User: false,
            Text: "소라껍데기로 이동하기",
            Type: "C"
        },
        {
            User: false,
            Text: "소라껍데기를 줍기",
            Type: "C"
        },
        {
            User: false,
            Text: "소라게로 이동하기",
            Type: "C"
        },
        {
            User: false,
            Text: "소라게에게 주기",
            Type: "C"
        },
    ],
    ]
    
    return (
        <>
            <GlobalStyles/>
            <Chat Obj={'reef'} size={45} left={-2} bottom={-5} anime={false} id={id} text={text}/>
        </>
    )
}
