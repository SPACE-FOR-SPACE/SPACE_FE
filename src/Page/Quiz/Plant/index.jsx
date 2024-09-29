import { useNavigate, useParams } from 'react-router-dom';
import useLoading from '../../../Hooks/useLoading.jsx';

import GlobalStyles from './GlobalStyle.jsx'
import Chat from '../../../Components/Chat.jsx'
import Loading from '../../Loading'
import Background from './Background.jsx';

export default function Plant() {
    const navigate = useNavigate();
    const loading = useLoading(navigate);
    const { id } = useParams();

    if (loading) {
        return <Loading />;
    } 

    console.log(id);

    return (
        <>
            <GlobalStyles />
            <Background />
            <Chat Obj={'none'} size={45} left={0} bottom={-2} />
        </>
    )
}
