import App from './App.js';
import ReactDom from 'react-dom';
import React from 'react';
import './css/bootCss/bootstrap.css';
import './css/style.css';
import './css/index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from "redux";
import { homeReducer } from "./reducers/homeReducer.js";
import { errorHandleReducer } from "./reducers/errorHandleReducer.js";
import { loaderReducer } from "./reducers/loaderReducer.js";
import { detailReducer} from "./reducers/detailReducer.js"

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/sagaFetchProducts";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    products: homeReducer,
    productDetail: detailReducer,
    error:errorHandleReducer,
    loader:loaderReducer
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
ReactDom.render(
    <Provider store={store}>
        <Router>
           <App />  
        </Router>
    </Provider>

    , document.getElementById('root')
);
