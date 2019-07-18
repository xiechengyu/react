import{CHANGE_INPUT,ADD_LIST,DELETE_ITEM,GET_LIST} from './actionTypes'
import axios from 'axios'

// 所有数据由redux处理保存
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
export const getList = (data)=>({
  type:GET_LIST,
  data
})
// 使用redux-thunk中间件处理异步请求
export const getTodoList = () => {
  return(dispatch)=>{
    axios('https://www.easy-mock.com/mock/5d2c904f8d71b63bc63de269/xiechengyu/Demo1').then((res)=>{
      const action = getList(res.data)
      dispatch(action)
    }).catch((e) =>{
      alert(`出现错误：${e}`)
    })
  }
}