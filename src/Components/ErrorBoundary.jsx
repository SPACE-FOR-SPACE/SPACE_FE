import React from 'react';
import axios from "axios";
import Loading from '../Page/Loading';
import config from '../config';
import { useEffect } from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false, 
            isTokenExpired: false, 
            isReissuing: false, 
            errorMessage: '' 
        };
    }

    static getDerivedStateFromError(error) {
        if (error.response && error.response.status === 401 && error.response.data.errorCode === 'EXPIRED_TOKEN') {
            return { hasError: true, isTokenExpired: true };
        }
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught in ErrorBoundary:", error, errorInfo);
        const errorMessage = error.message || '오류가 발생했습니다.';
        this.setState({ hasError: true, errorMessage });
    }

    componentDidMount() {
        if (this.state.hasError && !this.state.isReissuing) {
            const confirmed = window.confirm(`오류가 발생했습니다:\n${this.state.errorMessage}\n\n이전 페이지로 돌아가시겠습니까?`);
            if (confirmed) {
                const previousUrl = document.referrer;
                if (previousUrl) {
                    window.location.href = previousUrl;
                } else {
                    window.location.href = '/';
                    window.location.href = '/';
                }
            }
        }
    }

    reissueToken = async () => {
        this.setState({ isReissuing: true });
        try {
            await axios.post(`${config.api}/reissue`);
            window.location.reload();
        } catch (error) {
            console.error('토큰 재발급 실패', error);
            this.setState({ isReissuing: false });
        }
    };

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <h2>오류가 발생했습니다</h2>
                    <p>{this.state.errorMessage}</p>
                    <button onClick={() => {
                        const previousUrl = document.referrer;
                        if (previousUrl) {
                            window.location.href = previousUrl;
                        } else {
                            window.location.href = '/';
                        }
                    }}>이전 페이지로 돌아가기</button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
