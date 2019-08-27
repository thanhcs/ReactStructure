import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppError from './components/errors/AppError';

ReactDOM.render(
    <AppError>
        <App />
    </AppError>,
    document.getElementById('root'),
);
