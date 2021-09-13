import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.OPERATION:
      return { ...state, operation: state.operation + action.payload };

    case actionTypes.EQUAL:
      return { operation:"", result: action.payload };

    case actionTypes.WIPE:
      return {
        ...state,
        operation: state.operation.substring(0, state.operation.length - 1),
      };

    case actionTypes.CLEAR:
      return action.payload;

    default:
      return state;
  }
}
