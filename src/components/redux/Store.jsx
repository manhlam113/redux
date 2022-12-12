import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxSaga from "redux-saga";
import mysaga from "./saga/MySaga";
import rdcProduct from "./reducer/rdcProduct";
import rdcUser from "./reducer/rdcUser";

const middleware = reduxSaga();

const globalState = {
  stateProduct: rdcProduct,
  stateUser: rdcUser,
};

const allRdc = combineReducers(globalState);
export default createStore(allRdc, applyMiddleware(middleware));
middleware.run(mysaga);
