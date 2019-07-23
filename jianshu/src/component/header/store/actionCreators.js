import * as contants from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

export const inputFocus = () => ({
    type: contants.INPUT_FOCUS
})
export const inputBlur = () => ({
    type: contants.INPUT_BLUR
})
export const tabShow = () => ({
    type: contants.TAB_SHOW
})
export const tabHide = () => ({
    type: contants.TAB_HIDE
})
export const changePage = () => ({
    type: contants.CHANGE_PAGE
})

const changeList = (data) => ({
    type: contants.GET_INPUTLIST,
    inputList: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})
export const getInputList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5d2fce82f639fd623b3043ab/jianshu/inputList').then(res => {
            dispatch(changeList(res.data.inputList))
        }).catch(() => {
            console.log("error")
        })
    }
}