import { useNavigate, useParams } from 'react-router-dom';
import useLoading from '../../../Hooks/useLoading.jsx';

import GlobalStyles from './GlobalStyle.jsx'
import Chat from '../../../Components/Chat.jsx'
import Loading from '../../Loading'

export default function Sea() {
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
            <Chat Obj={'reef'} size={45} left={0} bottom={-2}/>
        </>
    )
}
