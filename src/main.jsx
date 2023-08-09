import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StrictMode } from 'react';

// import Robohash from './Robohash.jsx';
// import Nasa from './Nasa.jsx';
import AstrologyViewer from './AstrologyViewer.jsx';

const divRoot = document.querySelector('#root');

const raizReact = ReactDOM.createRoot(divRoot)

raizReact.render(
    <StrictMode>
        <div>
            {/* <h1>App em react</h1>
            <h3>Usando api cep</h3> */}
        <App/>
        <h1>Data dos signos</h1>

        <AstrologyViewer />
        </div>
    </StrictMode>
)
