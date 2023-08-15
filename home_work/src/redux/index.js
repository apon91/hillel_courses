import {applyMiddleware, createStore} from "redux";
import rootReducer from "./root.reducer";
import {logger} from "redux-logger/src";


const index = createStore(rootReducer, applyMiddleware(logger));

export default index;