import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from "./reducers"
import { sagas } from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

export default store;