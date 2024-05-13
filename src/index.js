import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import MyDocumentPDF from './DocumentPDF';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MyDocumentPDF />
  </React.StrictMode>
);
