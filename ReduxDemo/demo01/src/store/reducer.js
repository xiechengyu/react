import { CHANGE_INPUT, ADD_LIST, DELETE_ITEM, GET_LIST } from "./actionTypes";

const defaultState = {
  inputValue: "",
  list: []
};
export default (state = defaultState, action) => {
  // reducer里只能接收state，不能改变state
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  } else if (action.type === ADD_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    if (newState.inputValue !== "") {
      newState.list.push(newState.inputValue);
      newState.inputValue = "";
      return newState;
    }
  } else if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  } else if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list=action.data.data.list
    return newState;
  }
  return state;
};
