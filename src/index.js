import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    state={state} store={store} dispatch={store.dispatch.bind(store)}
                />
            </Provider>
        </BrowserRouter>
    );
};

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree()
});

reportWebVitals();