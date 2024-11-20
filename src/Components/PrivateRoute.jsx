import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import Loading from "../Page/Loading";
import config from "../config";

const PrivateRoute = () => {
    const [mainLogin, setMainLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${config.api}/check`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning': 'true',
                    },
                    withCredentials: true,
                });
                if (response.status === 200) {
                    setMainLogin(true);
                } else {
                    setMainLogin(false);
                }
            } catch (error) {
                console.error("로그인 상태 확인 실패:", error);
                setMainLogin(false);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    }
    return mainLogin ? <Outlet />:<Navigate to="/login" replace />;
};

export default PrivateRoute;
