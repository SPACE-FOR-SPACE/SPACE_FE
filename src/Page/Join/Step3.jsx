import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

export default function Step3({ Submit }) {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);
        
        return () => clearTimeout(timer);
    }, [Submit, navigate]);

    return (
        <S.Title3>만나서 반가워요!</S.Title3>
    );
}
