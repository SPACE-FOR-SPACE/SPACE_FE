import { useEffect, useState } from "react";
import * as S from './style';
import Header from "./Header";
import Side from "./Side";

export default function ProblemDetail() {
    return (
        <div>
            <S.Body />
            <Header />
            <Side title={1}/>
        </div>
    )
}