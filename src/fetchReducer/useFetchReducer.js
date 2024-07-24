import { useEffect, useReducer } from "react";
import { actions } from "./actions";
import { initialState, fetchReducer } from "./reducer";
const base_url = "https://jsonplaceholder.typicode.com/";
export const useFetchReducer = (endpoint) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  console.log(state.error);
  const getData = (endpoint) => {
    fetch(base_url + endpoint)
      .then((res) => {
        if (!res.ok)
          dispatch({ type: actions.set_error, payload: "Request Error" });
        return res.json();
      })
      .then((info) => {
        dispatch({ type: actions.set_data, payload: info });
      })
      .catch((err) => {
        dispatch({ type: actions.set_error, payload: err.message });
      });
  };
  useEffect(() => {
    getData(endpoint);
  }, [endpoint]);

  return state;
};
