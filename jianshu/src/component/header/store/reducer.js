import {INPUT_FOCUS,INPUT_BLUR} from '../../../store/actionTypes'

const defaultState = {
  focused: false
}
export default (state=defaultState,action) => {
  if(action.type === INPUT_FOCUS){
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = true
    return newState
    // return{
    //   focused:true
    // }
  }
  if(action.type === INPUT_BLUR){
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = false
    return newState
  }
  return state
}