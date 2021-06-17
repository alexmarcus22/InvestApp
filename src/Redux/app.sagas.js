import axios from "axios";
import { put, call, takeLatest, takeEvery, all } from "redux-saga/effects";
import { DATA_TO_FETCH } from "../theme/mockData";
import {
  ADD_TODO_SUCCESS,
  ADD_TODO_REQUEST,
  ADD_TODO_ERROR,
} from "./app.actions";

function* fetchDataRequest() {
  try {
    // API CALL
    // const url = `https://api.npoint.io/fa16d2987fdc5b559b5a/pages/`;
    // const response = yield call(() => axios.get(url));
    // console.log("after response:", response);
    console.log("before response");
    const data = JSON.parse(JSON.stringify(DATA_TO_FETCH()));
    console.log("after response", data);
    yield put({
      type: ADD_TODO_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({ type: ADD_TODO_ERROR, err });
  }
}

export function* watchFetchData() {
  yield takeLatest(ADD_TODO_REQUEST, fetchDataRequest);
}

export default function* rootSaga() {
  yield all([watchFetchData()]);
}
