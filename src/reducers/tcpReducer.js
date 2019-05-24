import { UPDATE_TCP_DATA } from '../actions/types'

const initialState = {
    ip: '192.168.0.4',
    port: '3000'
}

export const tcpReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TCP_DATA:
          return { ip: action.newIp, port: action.newPort }
      }
      return state
}