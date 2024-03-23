import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss';
import bridge from "@vkontakte/vk-bridge";
import {PagesWrapper} from "./wrappers/PageWrapper";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import {NOTVK} from "./screens/NotVK/NotVK";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
if (process.env.REACT_APP_MODE === 'prod') {
    console.log(1)
    disableReactDevTools();
}
root.render(
    <PagesWrapper>
        <NOTVK/>
    </PagesWrapper>
);

bridge.send('VKWebAppInit').then( r =>
    root.render(
        <App />
    )
)

