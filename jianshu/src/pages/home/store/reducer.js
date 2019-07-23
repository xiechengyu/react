import * as contants from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  list:[],
  imgList:[],
  qrUrl:"",
  showTab:false,
  authorList:[],
  authorPage:0
})
export default (state=defaultState,action) => {
  if(action.type === contants.GET_LIST){
    return state.merge({
      list:action.data.get("list"),
      imgList:action.data.get("imgList"),
      qrUrl:action.data.get("qrUrl")
    })
  }
  if(action.type === contants.GET_MORE){
    return state.set("list",state.get("list").concat(action.data.get("list")))
  }
  if(action.type === contants.SHWO_TAB){
    return state.set("showTab",true)
  }
  if(action.type === contants.HIDE_TAB){
    return state.set("showTab",false)
  }
  if(action.type === contants.GET_AUTHOR){
    return state.set("authorList",action.data.get("users"),)
  }
  if(action.type === contants.CHANGE_AUTHOR){
    let page = action.data
    page ++
    page %= 4
    return state.set("authorPage",page)
  }
  return state
}