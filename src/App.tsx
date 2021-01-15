import React from 'react';
import './App.css';
import Container from './containers/mainContainer/container';
const App = () => {
    return (
        // container is used for basic styling like centering the whole form
        <div className="container">
            <Container /> {/*Main component that holds reference to other components*/}
        </div>
    );
};

export default App;
