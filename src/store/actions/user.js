import PlaceholderService from "../../services/PlaceholderService";
const placeholderService = new PlaceholderService();

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

export function fetchData() {
  return dispatch => {
    dispatch({
      type: GET_USER_REQUEST,
    });

    placeholderService
      .getData()
      .then(data => {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_USER_FAIL,
          error: true,
          payload: new Error("Fetch error"),
        });
      });
  };
}
