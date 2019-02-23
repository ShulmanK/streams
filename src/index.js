import React from "react";
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom';
import App from './components/App'
import combineReducers from './reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(combineReducers,composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/" component={App} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);

