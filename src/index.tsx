import React from 'react';
import './index3.css';
import App4 from './App4';
import * as serviceWorker from './serviceWorke3r';
import { createRoot } from 'react-dom/client';

const container  = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(<App4 />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

