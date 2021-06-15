export const GET_DATA = "GET_DATA";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";
import { DATA_TO_FETCH } from "../../theme/mockData";

export const getData = () => ({
  type: GET_DATA,
});

export const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  payload: data,
});

export const getDataFailure = () => ({
  type: GET_DATA_FAILURE,
});

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(getData());
    try {
      await dispatch(getDataSuccess(DATA_TO_FETCH));
    } catch (error) {
      await dispatch(getDataFailure());
    }
  };
};
