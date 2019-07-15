import{CHANGE_INPUT,ADD_LIST,DELETE_ITEM} from './actionTypes'
export const changeInput = (value)=>({
  type:CHANGE_INPUT,
  value
})
export const addList = ()=>({
  type:ADD_LIST
})
export const deleteItem = (index)=>({
  type:DELETE_ITEM,
  index
})