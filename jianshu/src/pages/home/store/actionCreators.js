import * as contants from '../../../store/actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

const getList = (data) => ({
    type: contants.GET_LIST,
    data: fromJS(data)
})
export const getMore = () => ({
    type: contants.GET_MORE
})
export const getArticleList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5d2fce82f639fd623b3043ab/jianshu/getList').then(res => {
            dispatch(getList(res.data))
            console.log(res.data)
        }).catch(() => {
            console.log("error")
        })
    }
}