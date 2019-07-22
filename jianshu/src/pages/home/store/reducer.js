import * as contants from '../../../store/actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  list:[]
})
export default (state=defaultState,action) => {
  if(action.type === contants.GET_LIST){
    return state.set("list",action.data.get("list"))
  }
  if(action.type === contants.GET_MORE){
    return state.set("list",state.get("list").concat(state.get("list")))
  }
  return state
}