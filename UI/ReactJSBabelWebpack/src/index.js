import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import {Provider} from 'react-redux';
import Store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import App from './App'
// const App = () => (
//     <div>Testing</div>
// )

ReactDOM.render(
<Provider store={Store}>
    <Router>
        <App/>
    </Router>
</Provider>
, document.getElementById('root'));