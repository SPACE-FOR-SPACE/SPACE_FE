// ErrorTestComponent.jsx
import React from 'react';

class ErrorTestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    componentDidMount() {
        if (!this.state.hasError) {
            const error = new Error("의도적인 토큰 만료 에러");
            error.response = { status: 401, data: { errorCode: 'EXPIRED_TOKEN' } };
            this.setState({ hasError: true });
            throw error;
        }
    }

    render() {
        return <div>이 텍스트는 렌더링되지 않습니다.</div>;
    }
}

export default ErrorTestComponent;
