import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import rootSaga from "./sagas/index";
import createSagaMiddleware from "redux-saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;