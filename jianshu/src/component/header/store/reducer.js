import * as contants from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  focused: false,
  tab:false,
  inputList:[],
  page:0,
  totalPage:1
})
export default (state=defaultState,action) => {
  if(action.type === contants.INPUT_FOCUS){
    return state.set("focused",true)
  }
  if(action.type === contants.INPUT_BLUR){
    return state.set("focused",false)
  }
  if(action.type === contants.GET_INPUTLIST){
    return state.merge({
      "inputList":action.inputList,
      "totalPage":action.totalPage
    })
  }
  if(action.type === contants.TAB_SHOW){
    return state.set("tab",true)
  }
  if(action.type === contants.TAB_HIDE){
    return state.set("tab",false)
  }
  if(action.type === contants.CHANGE_PAGE){
    let newPage = state.get("page")
    const totalPage = state.get("totalPage")
    newPage++
    newPage %= totalPage
    return state.set("page",newPage)
  }
  return state
}