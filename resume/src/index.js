import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './css/index.css';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';

// Rendering default app component in index.html root element //
ReactDOM.render((
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ),
    document.getElementById('root'));
// Default React service worker to load parts of app into cache for faster loading //
registerServiceWorker();
