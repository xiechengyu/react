import * as contants from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

const getList = (data) => ({
    type: contants.GET_LIST,
    data: fromJS(data)
})
const getMore = (data) => ({
    type: contants.GET_MORE,
    data: fromJS(data)
})
export const showTab = () => ({
    type: contants.SHWO_TAB
})
export const hideTab = () => ({
    type: contants.HIDE_TAB
})
export const changeAuthor = (page) => ({
    type: contants.CHANGE_AUTHOR,
    data:page
})
export const getAuthor = (data) => ({
    type: contants.GET_AUTHOR,
    data:fromJS(data)
})
export const getArticleList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5d2fce82f639fd623b3043ab/jianshu/getHome').then(res => {
            dispatch(getList(res.data))
        }).catch(() => {
            console.log("error")
        })
    }
}
export const getMoreList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5d2fce82f639fd623b3043ab/jianshu/getMoreList').then(res => {
            dispatch(getMore(res.data))
        }).catch(() => {
            console.log("error")
        })
    }
}
export const getAuthorList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5d2fce82f639fd623b3043ab/jianshu/getAuthor').then(res => {
            dispatch(getAuthor(res.data))
        }).catch(() => {
            console.log("error")
        })
    }
}