import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import cityReducer from "./reducers/cityReducer"

import './index.scss';
import App from './App';

const store = createStore(cityReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
    <App />
    </Provider>
);
