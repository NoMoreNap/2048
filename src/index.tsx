import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss';
import bridge from "@vkontakte/vk-bridge";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
bridge.send('VKWebAppInit')
root.render(
    <App />
);
