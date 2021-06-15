import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import formReducer from "./formReducer";

const allReducers = combineReducers({
  form: formReducer,
  data: dataReducer,
});

export default allReducers;
