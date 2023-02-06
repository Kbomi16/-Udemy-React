import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
//import 할 때는 .js를 빼야함.
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

//JSX 구문
root.render(<App />);
