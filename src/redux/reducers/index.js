import { combineReducers } from "redux";

import currencyReducer from "./reducer"

const rootReducer = combineReducers({
    rootState: currencyReducer
})

export default rootReducer;