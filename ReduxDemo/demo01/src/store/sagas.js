import axios from 'axios'
import { getList } from './actionCreators'
import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes';

function* mySaga() {
  yield takeEvery(GET_MY_LIST, getListFun)
}
function* getListFun() {
  const res = yield axios('https://www.easy-mock.com/mock/5d2c904f8d71b63bc63de269/xiechengyu/Demo1')
  const action = getList(res.data)
  yield put(action)
}
export default mySaga