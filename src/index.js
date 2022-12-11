import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import TryunfoProvider from './context/TryunfoProvider';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TryunfoProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TryunfoProvider>
);
