import { useNavigate, useParams } from 'react-router-dom';
import useLoading from '../../../Hooks/useLoading.jsx';

import Chat from '../../../Components/Chat.jsx'
import Cloud from './Cloud.jsx'
import GlobalStyles from './GlobalStyle.jsx'
import Loading from '../../Loading'

export default function Volcano() {
    const navigate = useNavigate();
    const loading = useLoading(navigate);
    const { id } = useParams();

    if (loading) {
        return <Loading />;
    } 

    console.log(id);

    return (
        <>
            <GlobalStyles/>
            <Cloud />
            <Chat Obj={'volcano'} size={140} left={-30} bottom={-25}/>
        </>
    )
}