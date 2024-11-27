import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import write from "../../../assets/etc/write.svg";

export default function Side({ title }) {
    const navigate = useNavigate();

    return (
        <Aside>
            <List>
                <ListItem value={title === 1} onClick={() => navigate('/admin/incorrect')}>어휘오답</ListItem>
                <ListItem value={title === 2} onClick={() => navigate('/admin/maximun')}>최다 빈도 단어</ListItem>
                <ListItem value={title === 3} onClick={() => navigate('/admin/class')}>클래스룸</ListItem>
                <ListItem value={title === 4} onClick={() => navigate('/admin/question')}>자주 묻는 질문</ListItem>
            </List>
            <ContactButton>
                <img src={write} alt="문의 작성 아이콘" />
                1:1 문의 작성하기
            </ContactButton>
        </Aside>
    );
}

const Aside = styled.aside`
    width: 250px;
    height: 100vh;
    background-color: #EDEDED;
    padding: 20px;
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    flex-grow: 1;
`;

const ListItem = styled.button`
    width: 100%;
    margin: 20px 0;
    font-size: 18px;
    background: none;
    border: none;
    color: ${props => props.value ? '#030A26' : '#7B7B7B'};
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    text-align: left;
`;

const ContactButton = styled.button`
    position: fixed;
    width: 240px;
    height: 50px;
    display: flex;
    align-items: center;
    bottom: 30px; 
    padding: 10px 15px;
    background-color: #FFFFFF;
    color: black;
    border: none;
    border-radius: 15px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;

    img {
        width: 20px;
        height: 20px;
        margin-left: 20px;
        margin-right: 30px;
    }
`;
