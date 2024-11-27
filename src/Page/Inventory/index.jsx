import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const API_URL = "https://cc60-211-182-230-53.ngrok-free.app";

export default function Inventory() {
    const [test, setTest] = useState();
    const [loading, setLoading] = useState(true);
    console.log(import.meta.env.VITE_API_URL);

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
                    <div>
                        {test.map(item => (
                            <div key={item.id}>
                                <p>ID: {item.id}</p>
                                <p>Item ID: {item.itemId}</p>
                                <p>Category: {item.category}</p>
                                <p>Equipped: {item.isEquipped ? 'Yes' : 'No'}</p>
                            </div>
                        ))}
                    </div>
            }
        </div>
    )
}