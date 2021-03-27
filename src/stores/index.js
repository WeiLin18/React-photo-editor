import { createStore } from "redux";

const initState = {
  frame: "square"
};

const CHANGE_FRAME = "CHANGE_FRAME";

export const changeFrame = (frame) => {
  return {
    type: CHANGE_FRAME,
    payload: {
      frame: frame
    }
  };
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_FRAME:
      return {
        ...state,
        frame: action.payload.frame
      };
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
