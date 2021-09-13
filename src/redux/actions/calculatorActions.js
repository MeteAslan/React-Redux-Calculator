import * as actionTypes from "./actionTypes";
import  calculate  from "../../utils/calculate";

export function setOperation(operation) {
  return { type: actionTypes.OPERATION, payload: operation };
}

export function setEqual(operation) {
  let result = calculate(operation);
  return {
    type: actionTypes.EQUAL,
    payload: result,
  };
}

export function clear() {
  return {
    type: actionTypes.CLEAR,
    payload: { operation: "", result: "0" },
  };
}

export function wipe() {
  return {
    type: actionTypes.WIPE,
  };
}
