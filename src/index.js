import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';

const App = () => {
    return (
                <div className="container">
                    <div className="card-group">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);