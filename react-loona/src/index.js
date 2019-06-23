import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//JSX practice 
ReactDOM.render(<ul><li>one</li><li>dos</li><li>three</li> </ul>, document.getElementById('root'));

serviceWorker.unregister();
