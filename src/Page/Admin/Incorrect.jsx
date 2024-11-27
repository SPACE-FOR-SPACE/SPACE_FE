import { useEffect } from "react";
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

// Chart.js 요소 등록
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Incorrect() {
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
            <Header />
            <S.Container>
                <Side title={1} />
                <S.Section>
                    <S.Title>
                        <span>김민주</span>님의 어휘오답내역
                    </S.Title>
                    <ChartLayout>
                        <PieChart>
                            <Pie data={data} options={options} />
                        </PieChart>
                        <ChartText>
                            <p>
                                안녕하세요, 학부모님. 아이가 ‘아프로(앞으로)’, ‘아페(앞에)’, ‘핵득하기(획득하기)’ 등 단어를 자주 틀린 것을 확인했습니다.
                                <br />
                                일상 대화에서 틀린 단어를 포함한 짧은 문장을 자주 사용해 보세요. 예를 들어, “앞으로 가볼까?” 또는 “얻기를 해보자!” 같은 문장이 도움이 될 수 있습니다.
                                <br />
                                올바르게 사용할 때마다 칭찬하며 자신감을 키워주세요!
                            </p>
                        </ChartText>
                    </ChartLayout>
                </S.Section>
            </S.Container>
        </div>
    );
}

const ChartLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
  gap: 20px;
`;

const LegendText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

const PieChart = styled.div`
  width: 500px;
  height: 400px;
`;

const ChartText = styled.div`
  flex: 1;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
`;
