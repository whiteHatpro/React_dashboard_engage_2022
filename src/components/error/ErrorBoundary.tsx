import React, { Component, ErrorInfo } from 'react';

interface IState {
    error?: Error;
    errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<{}, IState> {
    state: IState = {
        error: null,
        errorInfo: null,
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            error,
            errorInfo,
        });
    }
    setState(_arg0: { error: Error; errorInfo: ErrorInfo; }) {
        throw new Error('Method not implemented.');
    }

    componentWillUnmount() {
        this.setState({
            error: null,
            errorInfo: null,
        });
    }

    render() {
        const { children } = this.props;
        const { error } = this.state;
        return error ? (
            <div>
                {error.toString()}
            </div>
        ) : children;
    }
}

export default ErrorBoundary;
