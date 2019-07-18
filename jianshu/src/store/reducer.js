import { combineReducers } from 'redux'
import headerReducer from '../component/header/store/reducer'

export default combineReducers({
  header:headerReducer
})
