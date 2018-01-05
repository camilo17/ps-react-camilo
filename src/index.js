import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Docs from './docs/Docs.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Docs />, document.getElementById('root'));
registerServiceWorker();
