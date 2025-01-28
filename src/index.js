// import MyDocumentPDF from 'documentPDF';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactPDF from '@react-pdf/renderer';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <MyDocumentPDF /> */}
  </React.StrictMode>
);

// ReactPDF.render(<MyDocumentPDF />, `${__dirname}/example.pdf`);
