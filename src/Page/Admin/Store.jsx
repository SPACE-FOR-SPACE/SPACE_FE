import { useEffect, useState } from "react";
import * as S from './style';
import Header from "./Header";
import Side from "./Side";

export default function Store() {
    return (
        <div>
            <S.Body />
            <Header />
            <Side title={3}/>
        </div>
    )
}