import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Sorry() {
    const navigate = useNavigate();
    useEffect(() => {
        const Sry = () => {
            setTimeout(() => {
                navigate('/');
            }, 1000);
        };

        Sry();
    })

    return (
        <h1>ㅈㅅ 미완성임</h1>
    )
}