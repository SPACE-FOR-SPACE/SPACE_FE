import { useEffect, useState } from "react";
import * as S from "./style";
import Header from "./Header";
import Side from "./Side";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Maximun() {

    const [user, setUser] = useState('');

    useEffect(() => {
        const User = async () => {
            try {
                const username = localStorage.getItem('username');
                setUser(username);
            } catch (error) {
                console.error('실패:', error);
            }
        };

        User();
    }, []);

    const data = {
        labels: ["앞으로(앞으로)", "아페(앞에)", "얻게(얻기)", "움직이기(움직이기)", "핵득하기(획득하기)"],
        datasets: [
            {
                data: [73, 46, 31, 17, 28],
                backgroundColor: [
                    "#d48806",
                    "#91d5ff",
                    "#2f54eb",
                    "#722ed1",
                    "#52c41a",
                ],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "right",
            },
        },
    };

    return (
        <div>
            <S.Body />
            <Header user={user} />
            <S.Container>
                <Side title={2} />
                <S.Section>
                    <S.Title>
                        <span>{user}</span>의 최다 빈도 단어
                    </S.Title>
                    <ChartLayout>
                        <PieChart>
                            <Pie data={data} options={options} />
                        </PieChart>
                    </ChartLayout>
                </S.Section>
            </S.Container>
        </div>
    );
}

const ChartLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  margin: 0 auto;
  margin-top: -50px;
  height: 80%; 
`;

const PieChart = styled.div`
  width: 600px;
  height: 400px;
`;
