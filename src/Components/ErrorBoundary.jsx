import React from 'react';
import axios from "axios";
import Loading from '../Page/Loading';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, isTokenExpired: false, isReissuing: false };
    }

    static getDerivedStateFromError(error) {
        if (error.response && error.response.status === 401 && error.response.data.errorCode === 'EXPIRED_TOKEN') {
            return { hasError: true, isTokenExpired: true };
        }
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught in ErrorBoundary:", error, errorInfo);
        if (this.state.isTokenExpired && !this.state.isReissuing) {
            this.reissueToken();
        }
    }

    reissueToken = async () => {
        this.setState({ isReissuing: true });
        try {
            await axios.post('/api/reissue');
            window.location.reload();
        } catch (error) {
            console.error('토큰 재발급 실패', error);
            this.setState({ isReissuing: false });
        }
    };

    render() {
        if (this.state.hasError) {
            if (this.state.isTokenExpired) {
                if (this.state.isReissuing) {
                    return <Loading />;
                }
                return <h1>토큰 재발급 시도 중 문제가 발생했습니다.</h1>;
            }
            return <h1>오류가 발생했습니다.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
