import { tcpReducer } from './tcpReducer'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
  tcpState: tcpReducer,
})