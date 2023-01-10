import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const fragment = document.createDocumentFragment();

let fillerWrapper = document.createElement('div');
fillerWrapper.setAttribute('id', 'filler-wrapper');
fragment.appendChild(fillerWrapper);

let ModalWrapper = document.createElement('div');
ModalWrapper.setAttribute('id', 'filler-modal-wrapper');
fragment.appendChild(ModalWrapper);

document.body.appendChild(fragment);

const root = ReactDOM.createRoot(fillerWrapper);

root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
