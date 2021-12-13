import { createStore } from "redux";

const initState = {
  frame: "square",
  log: "square"
};

const CHANGE_FRAME = "CHANGE_FRAME";

export const changeFrame = (frame) => {
  return {
    type: CHANGE_FRAME,
    payload: {
      frame: frame,
      log: frame
    }
  };
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_FRAME:
      return {
        ...state,
        frame: action.payload.frame,
        log: (state.log += ` > ${action.payload.log}`)
      };
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
