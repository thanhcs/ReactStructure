import React from 'react';
import log from 'loglevel';

interface StateType {
    hasError: boolean;
}

class AppError extends React.Component<any, StateType> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        log.info(error);
        return { hasError: true };
    }

    // eslint-disable-next-line class-methods-use-this
    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        log.info(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h2>Something went wrong. Please contact DEV team.</h2>;
        }

        return this.props.children;
    }
}

export default AppError;
