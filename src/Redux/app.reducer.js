import {
  ADD_TODO_SUCCESS,
  ADD_TODO_REQUEST,
  ADD_TODO_ERROR,
} from "./app.actions";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
        error: "",
        data: [],
      };
    }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        data: action,
        loading: false,
      };
    }
    case ADD_TODO_ERROR: {
      return {
        ...state,
        loading: false,
        error: action,
      };
    }
    default: {
      return state;
    }
  }
}
