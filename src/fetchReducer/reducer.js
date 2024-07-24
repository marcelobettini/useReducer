import { actions } from "./actions";
export const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

export const fetchReducer = (state, action) => {
  switch (action.type) {
    case actions.set_data:
      return {
        ...initialState,
        isLoading: false,
        data: action.payload,
      };
    case actions.set_error:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
