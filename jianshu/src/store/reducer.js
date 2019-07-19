import { combineReducers } from 'redux-immutable'
import headerReducer from '../component/header/store/reducer'

export default combineReducers({
  header:headerReducer
})
