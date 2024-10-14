import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const API_URL = "https://port-0-space-server-m1oxeihpad978327.sel4.cloudtype.app"; 

export default function Inventory() {
    const [test, setTest] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const Items = async () => {
            try {
                const response = await axios.get(`${API_URL}/inventories`, {
                    headers: {
                        'Content-Type': `application/json`,
                        'ngrok-skip-browser-warning': 'true',
                    },
                    withCredentials: true
                });
                console.log(response);
                console.log("성공");
                setTest(response.data);
                setLoading(false);
            } catch (error) {
                console.error('실패:', error);
            }
        };

        Items();
    }, []);

    return (
        <div>
            {
                loading ? <Loading /> :
                    <div>정보: {test}</div>
            }
        </div>
    )
}