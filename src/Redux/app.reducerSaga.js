import { combineReducers } from "redux";
import Reducer from "./app.reducer";
const RootReducer = combineReducers({
  Reducer: Reducer,
});

export default RootReducer;
