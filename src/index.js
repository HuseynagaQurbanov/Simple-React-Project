import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Collapse from './components/Collapse';

const App = () => {
    return (
                <div className="container">
                    <div className="card-group">
                        <Collapse>
                            <Card cardTitle="Elbey"
                                cardDesc="UI/UX Designer"
                                lastUpdatedTime="Last updated 37 mins ago"
                                cardImage="https://picsum.photos/id/1/200/300"/>
                        </Collapse>
                        
                        <Collapse>
                            <Card cardTitle="Ferid"
                                cardDesc="Director"
                                lastUpdatedTime="Last updated 5 hours ago"
                                cardImage="https://picsum.photos/id/10/200/300"/>
                        </Collapse>
                        

                        <Collapse>
                            <Card cardTitle="Huseyn"
                                cardDesc="Front End Developer"
                                lastUpdatedTime="Last updated 2 mins ago"
                                cardImage="https://picsum.photos/id/100/200/300"/>
                        </Collapse>
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