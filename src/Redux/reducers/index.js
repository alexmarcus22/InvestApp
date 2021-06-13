import { combineReducers } from "redux";
import dataReducer from "./data";
import formReducer from "./form";

const allReducers = combineReducers({
  form: formReducer,
  data: dataReducer,
});

export default allReducers;
