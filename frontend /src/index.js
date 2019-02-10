import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Light() {
  return <div>Just like a Light</div>;
}

ReactDOM.render(<Light />, document.getElementById('root'));
registerServiceWorker();
