import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const API_URL = "https://c4a6-211-182-230-53.ngrok-free.app";

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