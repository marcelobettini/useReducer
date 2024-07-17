import { ACTIONS } from "./CountActions";
export const init = (initialcount = 0) => {
  return { count: initialcount };
};

export const ReducerCount = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        count: state.count + 1,
      };
    case ACTIONS.DECREMENT:
      return {
        count: state.count - 1,
      };
    case ACTIONS.RESET:
      return init(action.payload);
    case ACTIONS.INCREMENT_ASYNC:
      return {
        count: state.count + 10,
      };
    case ACTIONS.INCREMENT_AMOUNT:
      return {
        count: state.count + action.payload,
      };

    default:
      break;
  }
};
